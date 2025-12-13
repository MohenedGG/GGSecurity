"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InitProj_1 = __importDefault(require("../projFilesControl/InitProj"));
const InstallSecondaryLibraries_1 = __importDefault(require("../projFilesControl/InstallSecondaryLibraries"));
class Init {
    // Project Initialization
    static initBackendProject(TypeScript = false, projectPath = process.cwd()) {
        return InitProj_1.default.initBackendProject(TypeScript, projectPath);
    }
    static installPackages(TypeScript = false, projectPath = process.cwd()) {
        return InitProj_1.default.installPackages(TypeScript, projectPath);
    }
    static createFullProject(TypeScript = false, projectPath = process.cwd()) {
        return InitProj_1.default.createFullProject(TypeScript, projectPath);
    }
    // Secondary Libraries Control
    static installAudioLibrary() {
        return InstallSecondaryLibraries_1.default.installAudioLibrary();
    }
    static installVideoLibrary() {
        return InstallSecondaryLibraries_1.default.installVideoLibrary();
    }
}
exports.default = Init;
