import { Request } from "express";
interface RequestInfo {
    ip: string;
    method: string;
    api: string;
    userAgent: string;
}
export default class RequestData {
    static getRequestIp(req: Request): string;
    static getRequestMethod(req: Request): string;
    static getRequestApi(req: Request): string;
    static getRequestUserAgent(req: Request): string;
    static getReqInfos(req: Request): RequestInfo;
}
export {};
