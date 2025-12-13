import InitProj from "../projFilesControl/InitProj";
import InstallSecondaryLibraries from "../projFilesControl/InstallSecondaryLibraries";

export default class Init {
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
        return InstallSecondaryLibraries.installAudioLibrary();
    }

    public static installVideoLibrary(): void {
        return InstallSecondaryLibraries.installVideoLibrary();
    }
}
