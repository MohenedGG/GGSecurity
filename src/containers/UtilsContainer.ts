import AudioUtils from "../utils/Audio";
import VideoUtils from "../utils/Vidoe";
import FileUtils from "../utils/Files";
import DateUtils from "../utils/Date";

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

    // Date Utils
    public static today(separator: string = "/"): string {
        return this.date.today(separator);
    }
    public static nowTime(separator: string = ":"): string {
        return this.date.nowTime(separator);
    }
}