import AudioUtils from "../utils/Audio";
import VideoUtils from "../utils/Vidoe";
import FileUtils from "../utils/Files";
import DateUtils from "../utils/Date";
import RequestData from "../utils/RequestData";
import { Request } from "express";
import ArrayUtils from "../utils/Array";

export default class Utils {
    private static audio = AudioUtils;
    private static video = VideoUtils;
    private static file = FileUtils;
    private static date = DateUtils;

    // Audio Utils
    public static getAudioDuration(filePath: string): Promise<string> {
        return this.audio.getAudioDuration(filePath);
    }

    // Video Utils
    public static getVideoDuration(filePath: string): Promise<string> {
        return this.video.getVideoDuration(filePath);
    }

    // File Utils
    public static getFileSize(
        filePath: string,
        unit: "B" | "b" | "KB" | "kb" | "MB" | "mb" | "GB" | "gb" = "KB"
    ): string {
        return this.file.getFileSize(filePath, unit);
    }
    public static getFileExtension(filePath: string): string {
        return this.file.getFileExtension(filePath);
    }
    public static isImageFile(filePath: string): boolean {
        return this.file.isImageFile(filePath);
    }
    public static isVideoFile(filePath: string): boolean {
        return this.file.isVideoFile(filePath);
    }
    public static isAudioFile(filePath: string): boolean {
        return this.file.isAudioFile(filePath);
    }
    public static isDocumentFile(filePath: string): boolean {
        return this.file.isDocumentFile(filePath);
    }
    public static isArchiveFile(filePath: string): boolean {
        return this.file.isArchiveFile(filePath);
    }

    // Date Utils
    public static today(separator: string = "/"): string {
        return this.date.today(separator);
    }
    public static nowTime(separator: string = ":"): string {
        return this.date.nowTime(separator);
    }

    // RequestData Utils
    public static getRequestIp(req: Request): string {
        return RequestData.getRequestIp(req);
    }
    public static getRequestMethod(req: Request): string {
        return RequestData.getRequestMethod(req);
    }
    public static getRequestApi(req: Request): string {
        return RequestData.getRequestApi(req);
    }
    public static getRequestUserAgent(req: Request): string {
        return RequestData.getRequestUserAgent(req);
    }
    public static getReqInfos(req: Request): ReturnType<typeof RequestData.getReqInfos> {
        return RequestData.getReqInfos(req);
    }

    // Array Utils
    public static shuffleArray<T>(array: T[]): T[] {
        return ArrayUtils.shuffle(array);
    }
    public static removeDuplicatesFromArray<T>(array: T[]): T[] {
        return ArrayUtils.removeDuplicates(array);
    }
    public static getRandomElement<T>(array: T[]): T | undefined {
        return ArrayUtils.getRandomElement(array);
    }
    public static flattenArray<T>(array: T[][]): T[] {
        return ArrayUtils.flatten(array);
    }
    public static maxFromArray(array: number[]): number | undefined {
        return ArrayUtils.max(array);
    }
    public static minFromArray(array: number[]): number | undefined {
        return ArrayUtils.min(array);
    }
    public static sumArray(array: number[]): number {
        return ArrayUtils.sum(array);
    }
    public static averageArray(array: number[]): number | undefined {
        return ArrayUtils.average(array);
    }
}