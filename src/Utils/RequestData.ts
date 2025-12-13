import { Request } from "express";

interface RequestInfo {
    ip: string;
    method: string;
    api: string;
    userAgent: string;
}

export default class RequestData {
    public static getRequestIp(req: Request): string {
        const forwarded = req.headers["x-forwarded-for"];
        const forwardedIp = Array.isArray(forwarded)
            ? forwarded[0]
            : forwarded?.split(",")[0]?.trim();

        return (
            forwardedIp ||
            req.socket.remoteAddress?.replace(/^::ffff:/, "") ||
            "Unknown"
        );
    }

    public static getRequestMethod(req: Request): string {
        return req.method;
    }

    public static getRequestApi(req: Request): string {
        return req.originalUrl;
    }

    public static getRequestUserAgent(req: Request): string {
        return req.headers["user-agent"] || "Unknown";
    }

    public static getReqInfos(req: Request): RequestInfo {
        const ip = this.getRequestIp(req);
        const method = this.getRequestMethod(req);
        const api = this.getRequestApi(req);
        const userAgent = this.getRequestUserAgent(req);
        return { ip, method, api, userAgent };
    }
}
