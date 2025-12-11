import xss, { FilterXSS, IFilterXSSOptions } from "xss";
import { Request, Response, NextFunction } from "express";

export default class XSSProtection {
    private filter: FilterXSS;

    constructor(options: IFilterXSSOptions = {}) {
        // Default XSS filter options can be set here
        this.filter = new FilterXSS(options);
    }

    // Middleware to clean request body
    public cleanBody = (req: Request, res: Response, next: NextFunction) => {
        if (req.body) {
            for (const key in req.body) {
                // Only clean string fields
                if (typeof req.body[key] === "string") {
                    req.body[key] = xss(req.body[key]);
                }
            }
        }
        next();
    };

    // Method to clean arbitrary text
    public cleanText(text: string): string {
        return this.filter.process(text);
    }

    // Method to update XSS filter options
    public setOptions(options: IFilterXSSOptions = {}): void {
        this.filter = new FilterXSS(options);
    }
}
