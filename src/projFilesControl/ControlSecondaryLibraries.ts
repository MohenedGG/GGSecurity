import { execSync } from "child_process";
export default class ControlSecondaryLibraries {
    // Install audio library using npm
    public static installAudioLibrary(): void {
        try {
            execSync("npm install music-metadata", { stdio: "inherit" });
            console.log("✓ Audio library installed successfully.");
        } catch (error) {
            throw new Error(
                `Failed to install audio library: ${(error as Error).message}`
            );
        }
    }

    // Install video library using npm
    public static installVideoLibrary(): void {
        try {
            execSync("npm install get-video-duration", { stdio: "inherit" });
            console.log("✓ Video library installed successfully.");
        } catch (error) {
            throw new Error(
                `Failed to install video library: ${(error as Error).message}`
            );
        }
    }
}