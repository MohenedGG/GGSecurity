"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_video_duration_1 = require("get-video-duration");
class VideoUtils {
    // Format duration as hh:mm:ss
    static formatDuration(seconds) {
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
    static async getVideoDuration(filePath) {
        try {
            const seconds = await (0, get_video_duration_1.getVideoDurationInSeconds)(filePath);
            return this.formatDuration(seconds);
        }
        catch (err) {
            console.error("Error reading video metadata:", err.message);
            return "00:00";
        }
    }
}
exports.default = VideoUtils;
