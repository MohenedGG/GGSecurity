"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class ControlSecondaryLibraries {
    // Install audio library using npm
    static installAudioLibrary() {
        try {
            (0, child_process_1.execSync)("npm install music-metadata", { stdio: "inherit" });
            console.log("✓ Audio library installed successfully.");
        }
        catch (error) {
            throw new Error(`Failed to install audio library: ${error.message}`);
        }
    }
    // Install video library using npm
    static installVideoLibrary() {
        try {
            (0, child_process_1.execSync)("npm install get-video-duration", { stdio: "inherit" });
            console.log("✓ Video library installed successfully.");
        }
        catch (error) {
            throw new Error(`Failed to install video library: ${error.message}`);
        }
    }
}
exports.default = ControlSecondaryLibraries;
