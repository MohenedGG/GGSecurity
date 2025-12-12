import { getVideoDurationInSeconds } from "get-video-duration";

export default class VideoUtils {
    // Format duration as hh:mm:ss
    private static formatDuration(seconds: number): string {
        seconds = Math.floor(seconds);

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const hh = hrs > 0 ? String(hrs).padStart(2, "0") + ":" : "";
        const mm = String(mins).padStart(2, "0");
        const ss = String(secs).padStart(2, "0");

        return hh + mm + ":" + ss;
    }

    // Get formatted duration
    public static async getVideoDuration(filePath: string): Promise<string> {
        try {
            const seconds = await getVideoDurationInSeconds(filePath);
            return this.formatDuration(seconds);
        } catch (err) {
            console.error(
                "Error reading video metadata:",
                (err as Error).message
            );
            return "00:00";
        }
    }
}
