"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
class InitProj {
    // Initialize a backend project structure
    static initBackendProject(TypeScript = false, projectPath = process.cwd()) {
        const language = TypeScript
            ? "typescript"
            : "javascript";
        try {
            // Main src directory
            const srcPath = path_1.default.join(projectPath, "src");
            // Backend folders structure
            const folders = [
                "src",
                "src/controllers",
                "src/models",
                "src/routes",
                "src/middlewares",
                "src/utils",
            ];
            // Create all folders
            folders.forEach((folder) => {
                const folderPath = path_1.default.join(projectPath, folder);
                if (!fs_1.default.existsSync(folderPath)) {
                    fs_1.default.mkdirSync(folderPath, { recursive: true });
                    console.log(`✓ Created: ${folder}`);
                }
                else {
                    console.log(`🩸 Already exists: ${folder}`);
                }
            });
            // Create index files for each folder
            this.createIndexFiles(projectPath, language);
            console.log(`\n✅ Backend project (${language.toUpperCase()}) created successfully!`);
        }
        catch (error) {
            throw new Error(`Failed to initialize project: ${error.message}`);
        }
    }
    // Create index files in main folders
    static createIndexFiles(projectPath, language) {
        const fileExtension = language === "typescript" ? "ts" : "js";
        // TypeScript version
        const tsContent = `import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express + TypeScript!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
`;
        // JavaScript version
        const jsContent = `const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express + JavaScript!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
`;
        const content = language === "typescript" ? tsContent : jsContent;
        fs_1.default.writeFileSync(path_1.default.join(projectPath, "src", `index.${fileExtension}`), content);
    }
    // Install essential packages
    static installPackages(TypeScript = false, projectPath = process.cwd()) {
        try {
            console.log("\n📦 Installing packages...\n");
            // Core packages for both languages
            const corePackages = [
                "express",
                "compression@1.7.4",
                "helmet",
                "morgan",
                "xss",
                "dotenv",
                "cors",
            ];
            // TypeScript specific packages
            const tsDevPackages = [
                "@types/express",
                "@types/compression",
                "@types/morgan",
                "@types/cors",
                "@types/node",
                "typescript",
                "ts-node",
                "ts-node-dev",
            ];
            // Install core packages
            console.log("Installing core packages...");
            (0, child_process_1.execSync)(`npm install ${corePackages.join(" ")}`, {
                cwd: projectPath,
                stdio: "inherit",
            });
            // Install TypeScript packages if needed
            if (TypeScript) {
                console.log("\nInstalling TypeScript packages...");
                (0, child_process_1.execSync)(`npm install --save-dev ${tsDevPackages.join(" ")}`, {
                    cwd: projectPath,
                    stdio: "inherit",
                });
                // Create tsconfig.json
                this.createTsConfig(projectPath);
            }
            // Update package.json
            this.updatePackageJson(TypeScript, projectPath);
            console.log("\n✅ All packages installed successfully!");
        }
        catch (error) {
            throw new Error(`Failed to install packages: ${error.message}`);
        }
    }
    // Create tsconfig.json for TypeScript projects
    static createTsConfig(projectPath) {
        const tsConfig = {
            compilerOptions: {
                target: "ES2020",
                module: "commonjs",
                lib: ["ES2020"],
                outDir: "./dist",
                rootDir: "./src",
                strict: true,
                esModuleInterop: true,
                skipLibCheck: true,
                forceConsistentCasingInFileNames: true,
                resolveJsonModule: true,
                moduleResolution: "node",
            },
            include: ["src/**/*"],
            exclude: ["node_modules", "dist"],
        };
        fs_1.default.writeFileSync(path_1.default.join(projectPath, "tsconfig.json"), JSON.stringify(tsConfig, null, 2));
        console.log("✓ Created tsconfig.json");
    }
    // Update package.json based on project type
    static updatePackageJson(TypeScript, projectPath) {
        const packageJsonPath = path_1.default.join(projectPath, "package.json");
        if (!fs_1.default.existsSync(packageJsonPath)) {
            console.log("⚠ package.json not found, skipping update");
            return;
        }
        try {
            const packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, "utf-8"));
            if (TypeScript) {
                // TypeScript project - remove type field or set to commonjs
                delete packageJson.type;
                // Add TypeScript scripts
                packageJson.scripts = {
                    ...packageJson.scripts,
                    dev: "ts-node-dev --respawn --transpile-only src/index.ts",
                    build: "tsc",
                    start: "node dist/index.js",
                };
            }
            else {
                // JavaScript project - set type to module (ES6)
                packageJson.type = "module";
                // Add JavaScript scripts
                packageJson.scripts = {
                    ...packageJson.scripts,
                    dev: "node src/index.js",
                    start: "node src/index.js",
                };
            }
            fs_1.default.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
            console.log(`✓ Updated package.json (type: ${TypeScript ? "TypeScript (no type field)" : "module"})`);
        }
        catch (error) {
            console.error("❌ Failed to update package.json:", error.message);
        }
    }
    // Create complete project (structure + packages)
    static createFullProject(TypeScript = false, projectPath = process.cwd()) {
        console.log("🚀 Creating full backend project...\n");
        // Create structure
        this.initBackendProject(TypeScript, projectPath);
        // Install packages
        this.installPackages(TypeScript, projectPath);
        console.log("\n🎉 Project setup completed!");
    }
}
exports.default = InitProj;
