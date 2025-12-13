export default class FileUtils {
    private static readonly imageExtensions;
    private static readonly videoExtensions;
    private static readonly audioExtensions;
    private static readonly documentExtensions;
    private static readonly archiveExtensions;
    private static getRawSize;
    static getFileSize(filePath: string, unit?: "B" | "b" | "KB" | "kb" | "MB" | "mb" | "GB" | "gb"): string;
    static getFileExtension(filePath: string): string;
    static isImageFile(filePath: string): boolean;
    static isVideoFile(filePath: string): boolean;
    static isAudioFile(filePath: string): boolean;
    static isDocumentFile(filePath: string): boolean;
    static isArchiveFile(filePath: string): boolean;
}
