import * as musicMetadata from "music-metadata";

export default class AudioUtils {
    // Calculate the duration of the sound in seconds
    private static async calculateAudioDuration(
        filePath: string
    ): Promise<number> {
        try {
            const metadata = await musicMetadata.parseFile(filePath);
            return metadata.format.duration ?? 0;
        } catch (err) {
            console.error(
                "Error reading audio metadata:",
                (err as Error).message
            );
            return 0;
        }
    }

    // Length format as hh:mm:ss
    private static formatDuration(seconds: number): string {
        seconds = Math.floor(seconds);

        const hrs = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const hh = hrs > 0 ? String(hrs).padStart(2, "0") + ":" : "";
        const mm = String(minutes).padStart(2, "0");
        const ss = String(secs).padStart(2, "0");

        return hh + mm + ":" + ss;
    }

    // Verify supported file types
    private static async verifyFileType(
        filePath: string
    ): Promise<boolean> {
        if (!filePath.endsWith(".mp3") && !filePath.endsWith(".wav")) {
            console.warn("File type not supported.");
            return false;
        }
        return true;
    }

    // Get formatted duration
    public static async getAudioDuration(filePath: string): Promise<string> {
        if (!(await this.verifyFileType(filePath))) {
            return "00:00";
        }

        const seconds = await this.calculateAudioDuration(filePath);
        return this.formatDuration(seconds);
    }
}
