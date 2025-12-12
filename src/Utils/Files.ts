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
}
