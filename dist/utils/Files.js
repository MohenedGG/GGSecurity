"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileUtils {
    // Get raw file size in bytes
    static getRawSize(filePath) {
        try {
            const stats = fs_1.default.statSync(filePath);
            return stats.size;
        }
        catch (err) {
            throw new Error(`Error getting file size: ${err.message}`);
        }
    }
    // Get size in defrined unit
    static getFileSize(filePath, unit = "KB") {
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
    static getFileExtension(filePath) {
        return path_1.default.extname(filePath).slice(1);
    }
    // Check if file is an image
    static isImageFile(filePath) {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.imageExtensions.includes(ext);
    }
    // Check if file is a video
    static isVideoFile(filePath) {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.videoExtensions.includes(ext);
    }
    // Check if file is an audio
    static isAudioFile(filePath) {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.audioExtensions.includes(ext);
    }
    // Check if file is a document
    static isDocumentFile(filePath) {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.documentExtensions.includes(ext);
    }
    // Check if file is a compressed archive
    static isArchiveFile(filePath) {
        const ext = this.getFileExtension(filePath).toLowerCase();
        return this.archiveExtensions.includes(ext);
    }
}
// Supported image extensions
FileUtils.imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "tiff",
    "svg",
];
// Supported video extensions
FileUtils.videoExtensions = [
    "mp4",
    "avi",
    "mov",
    "wmv",
    "flv",
    "mkv",
    "webm",
];
// Supported audio extensions
FileUtils.audioExtensions = [
    "mp3",
    "wav",
    "flac",
    "aac",
    "ogg",
    "m4a",
];
// Supported document extensions
FileUtils.documentExtensions = [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
    "rtf",
];
// Supported archive extensions
FileUtils.archiveExtensions = [
    "zip",
    "rar",
    "7z",
    "tar",
    "gz",
    "bz2",
];
exports.default = FileUtils;
