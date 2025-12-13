import fs from "fs";
import path from "path";

export default class FileUtils {
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
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff", "svg"];
        const ext = this.getFileExtension(filePath).toLowerCase();
        return imageExtensions.includes(ext);
    }

    // Check if file is a video
    public static isVideoFile(filePath: string): boolean {
        const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "mkv", "webm"];
        const ext = this.getFileExtension(filePath).toLowerCase();
        return videoExtensions.includes(ext);
    }

    // Check if file is an audio
    public static isAudioFile(filePath: string): boolean {
        const audioExtensions = ["mp3", "wav", "flac", "aac", "ogg", "m4a"];
        const ext = this.getFileExtension(filePath).toLowerCase();
        return audioExtensions.includes(ext);
    }

    // Check if file is a document
    public static isDocumentFile(filePath: string): boolean {
        const documentExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf"];
        const ext = this.getFileExtension(filePath).toLowerCase();
        return documentExtensions.includes(ext);
    }

    // Check if file is a compressed archive
    public static isArchiveFile(filePath: string): boolean {
        const archiveExtensions = ["zip", "rar", "7z", "tar", "gz", "bz2"];
        const ext = this.getFileExtension(filePath).toLowerCase();
        return archiveExtensions.includes(ext);
    }
}
