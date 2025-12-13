import fs from "fs";
import path from "path";

export default class FileUtils {

    // Supported image extensions
    private static readonly imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff", "svg"];

    // Supported video extensions
    private static readonly videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "mkv", "webm"];

    // Supported audio extensions
    private static readonly audioExtensions = ["mp3", "wav", "flac", "aac", "ogg", "m4a"];

    // Supported document extensions
    private static readonly documentExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf"];

    // Supported archive extensions
    private static readonly archiveExtensions = ["zip", "rar", "7z", "tar", "gz", "bz2"];

    // Get raw file size in bytes
    private static getRawSize(filePath: string): number {
        try {
            const stats = fs.statSync(filePath);
            return stats.size;
        } catch (err) {
            console.error("Error getting file size:", (err as Error).message);
            return 0;
        }
    }

    // Get size in defrined unit
    public static getFileSize(
        filePath: string,
        unit: "B" | "b" | "KB" | "kb" | "MB" | "mb" | "GB" | "gb" = "KB"
    ): string {
        const bytes = this.getRawSize(filePath);
        switch (unit) {
            case "B":
            case "b":
                return `${bytes} B`;
            case "KB":
            case "kb":
                return `${(bytes / 1024).toFixed(2)} KB`;
            case "MB":
            case "mb":
                return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
            case "GB":
            case "gb":
                return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
            default:
                return `${(bytes / 1024).toFixed(2)} KB`;
        }
    }

    // Get file extension
    public static getFileExtension(filePath: string): string {
        return path.extname(filePath).slice(1);
    }

    // Check if file is an image
    public static isImageFile(filePath: string): boolean {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.imageExtensions.includes(ext);
    }

    // Check if file is a video
    public static isVideoFile(filePath: string): boolean {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.videoExtensions.includes(ext);
    }

    // Check if file is an audio
    public static isAudioFile(filePath: string): boolean {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.audioExtensions.includes(ext);
    }

    // Check if file is a document
    public static isDocumentFile(filePath: string): boolean {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.documentExtensions.includes(ext);
    }

    // Check if file is a compressed archive
    public static isArchiveFile(filePath: string): boolean {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.archiveExtensions.includes(ext);
    }
}
