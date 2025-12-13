import InitProj from "../projFilesControl/InitProj";
import ControlSecondaryLibraries from "../projFilesControl/ControlSecondaryLibraries";

export default class Controllers {
    // Project Initialization
    public static initBackendProject(
        TypeScript: boolean = false,
        projectPath: string = process.cwd()
    ): void {
        return InitProj.initBackendProject(TypeScript, projectPath);
    }

    public static installPackages(
        TypeScript: boolean = false,
        projectPath: string = process.cwd()
    ): void {
        return InitProj.installPackages(TypeScript, projectPath);
    }

    public static createFullProject(
        TypeScript: boolean = false,
        projectPath: string = process.cwd()
    ): void {
        return InitProj.createFullProject(TypeScript, projectPath);
    }

    // Secondary Libraries Control
    public static installAudioLibrary(): void {
        return ControlSecondaryLibraries.installAudioLibrary();
    }

    public static installVideoLibrary(): void {
        return ControlSecondaryLibraries.installVideoLibrary();
    }
}
