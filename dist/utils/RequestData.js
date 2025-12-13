"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestData {
    static getRequestIp(req) {
        const forwarded = req.headers["x-forwarded-for"];
        const forwardedIp = Array.isArray(forwarded)
            ? forwarded[0]
            : forwarded?.split(",")[0]?.trim();
        return (forwardedIp ||
            req.socket.remoteAddress?.replace(/^::ffff:/, "") ||
            "Unknown");
    }
    static getRequestMethod(req) {
        return req.method;
    }
    static getRequestApi(req) {
        return req.originalUrl;
    }
    static getRequestUserAgent(req) {
        return req.headers["user-agent"] || "Unknown";
    }
    static getReqInfos(req) {
        const ip = this.getRequestIp(req);
        const method = this.getRequestMethod(req);
        const api = this.getRequestApi(req);
        const userAgent = this.getRequestUserAgent(req);
        return { ip, method, api, userAgent };
    }
}
exports.default = RequestData;
