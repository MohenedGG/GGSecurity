"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const musicMetadata = __importStar(require("music-metadata"));
class AudioUtils {
    // Calculate the duration of the sound in seconds
    static async calculateAudioDuration(filePath) {
        try {
            const metadata = await musicMetadata.parseFile(filePath);
            return metadata.format.duration ?? 0;
        }
        catch (err) {
            console.error("Error reading audio metadata:", err.message);
            return 0;
        }
    }
    // Length format as hh:mm:ss
    static formatDuration(seconds) {
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
    static async verifyFileType(filePath) {
        if (!filePath.endsWith(".mp3") && !filePath.endsWith(".wav")) {
            console.warn("File type not supported.");
            return false;
        }
        return true;
    }
    // Get formatted duration
    static async getAudioDuration(filePath) {
        if (!(await this.verifyFileType(filePath))) {
            return "00:00";
        }
        const seconds = await this.calculateAudioDuration(filePath);
        return this.formatDuration(seconds);
    }
}
exports.default = AudioUtils;
