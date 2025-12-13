# 🛠️ GGToolsKit

A comprehensive Node.js toolkit providing utilities, security protections, and project initialization tools for Express applications.

## 📦 Installation

```bash
npm install gg-tools-kit
```

## 🚀 Quick Start

```typescript
import GGToolsKit from "gg-tools-kit";

// Initialize protections
const protections = new GGToolsKit.Protections();
app.use(protections.getAllMiddlewares());

// Use utilities
const fileSize = GGToolsKit.Utils.getFileSize("myfile.txt");
const today = GGToolsKit.Utils.today();

// Initialize a new backend project
GGToolsKit.Init.createFullProject(true); // TypeScript project
```

---

## 📚 Features

### 🔒 **Security Protections**

Complete security middleware suite for Express applications:

-   **Compression**: Response compression with configurable options
-   **Helmet**: Security headers protection
-   **XSS Protection**: Cross-site scripting prevention
-   **Logger**: Request logging with Morgan

### 🧰 **Utilities**

Comprehensive utility functions for common tasks:

-   **File Operations**: Size calculation, type detection, extension extraction
-   **Date & Time**: Formatted date and time functions
-   **Audio/Video**: Duration calculation for media files
-   **Array Operations**: Shuffle, dedupe, flatten, min/max, average
-   **Request Data**: IP extraction, method, API path, user agent

### 🏗️ **Project Initialization**

Automated project setup with best practices:

-   TypeScript or JavaScript project structure
-   Automatic package installation
-   Pre-configured security middleware
-   Ready-to-use Express server

---

## 📖 API Documentation

### 🔒 Protections

#### Initialize Protections

```typescript
import GGToolsKit from "gg-tools-kit";

const protections = new GGToolsKit.Protections();

// Apply all middlewares at once
protections.getAllMiddlewares().forEach((middleware) => app.use(middleware));
```

#### Configure Protections

```typescript
protections.configure({
    compression: {
        threshold: 2048,
        level: 6,
    },
    logger: {
        format: "dev",
        filePath: "./logs/access.log",
    },
    helmet: {
        contentSecurityPolicy: {
            directives: {
                "default-src": ["'self'"],
                "img-src": ["'self'", "data:", "https:"],
            },
        },
    },
    xss: {
        // XSS filter options
    },
});
```

---

### 🧰 Utils

#### File Operations

```typescript
// Get file size
const size = GGToolsKit.Utils.getFileSize("myfile.txt", "MB");
// Returns: "2.45 MB"

// Get file extension
const ext = GGToolsKit.Utils.getFileExtension("photo.jpg");
// Returns: "jpg"

// Check file type
const isImage = GGToolsKit.Utils.isImageFile("photo.jpg");
const isVideo = GGToolsKit.Utils.isVideoFile("video.mp4");
const isAudio = GGToolsKit.Utils.isAudioFile("song.mp3");
const isDoc = GGToolsKit.Utils.isDocumentFile("doc.pdf");
const isArchive = GGToolsKit.Utils.isArchiveFile("file.zip");
```

**Supported file types:**

-   **Images**: jpg, jpeg, png, gif, bmp, webp, tiff, svg
-   **Videos**: mp4, avi, mov, wmv, flv, mkv, webm
-   **Audio**: mp3, wav, flac, aac, ogg, m4a
-   **Documents**: pdf, doc, docx, xls, xlsx, ppt, pptx, txt, rtf
-   **Archives**: zip, rar, 7z, tar, gz, bz2

#### Date & Time

```typescript
// Get current date
const today = GGToolsKit.Utils.today();
// Returns: "2025/12/13"

const todayDashed = GGToolsKit.Utils.today("-");
// Returns: "2025-12-13"

// Get current time
const time = GGToolsKit.Utils.nowTime();
// Returns: "PM 09:30:45"
```

#### Audio & Video Duration

```typescript
// Get audio duration
const audioDuration = await GGToolsKit.Utils.getAudioDuration("song.mp3");
// Returns: "03:45" or "01:23:45"

// Get video duration
const videoDuration = await GGToolsKit.Utils.getVideoDuration("video.mp4");
// Returns: "10:30" or "01:15:30"

// Install required libraries
GGToolsKit.Init.installAudioLibrary();
GGToolsKit.Init.installVideoLibrary();
```

#### Request Data

```typescript
app.post("/api/data", (req, res) => {
    // Get client IP
    const ip = GGToolsKit.Utils.getRequestIp(req);

    // Get request method
    const method = GGToolsKit.Utils.getRequestMethod(req);

    // Get API endpoint
    const api = GGToolsKit.Utils.getRequestApi(req);

    // Get user agent
    const userAgent = GGToolsKit.Utils.getRequestUserAgent(req);

    // Get all info at once
    const info = GGToolsKit.Utils.getReqInfos(req);
    // Returns: { ip, method, api, userAgent }

    res.json(info);
});
```

#### Array Operations

```typescript
// Shuffle array
const shuffled = GGToolsKit.Utils.shuffleArray([1, 2, 3, 4, 5]);

// Remove duplicates
const unique = GGToolsKit.Utils.removeDuplicatesFromArray([1, 1, 2, 3, 3]);
// Returns: [1, 2, 3]

// Get random element
const random = GGToolsKit.Utils.getRandomElement([1, 2, 3, 4, 5]);

// Flatten nested array
const flat = GGToolsKit.Utils.flattenArray([[1, 2], [3, 4], [5]]);
// Returns: [1, 2, 3, 4, 5]

// Math operations
const max = GGToolsKit.Utils.maxFromArray([1, 5, 3, 9, 2]);
const min = GGToolsKit.Utils.minFromArray([1, 5, 3, 9, 2]);
const sum = GGToolsKit.Utils.sumArray([1, 2, 3, 4, 5]);
const avg = GGToolsKit.Utils.averageArray([1, 2, 3, 4, 5]);
```

---

### 🏗️ Project Initialization

#### Create Full Project

```typescript
// Create TypeScript project
GGToolsKit.Init.createFullProject(true, "/path/to/project");

// Create JavaScript project
GGToolsKit.Init.createFullProject(false, "/path/to/project");
```

This will:

-   Create project structure (src, controllers, models, routes, middlewares, utils)
-   Install all necessary packages
-   Configure TypeScript (if selected)
-   Setup package.json scripts
-   Create a ready-to-run Express server

#### Manual Setup

```typescript
// Only create folder structure
GGToolsKit.Init.initBackendProject(true, "/path/to/project");

// Only install packages
GGToolsKit.Init.installPackages(true, "/path/to/project");

// Install media libraries
GGToolsKit.Init.installAudioLibrary();
GGToolsKit.Init.installVideoLibrary();
```

#### Project Structure

```
📁 project/
├── 📁 src/
│   ├── 📄 server.ts (or server.js)
│   ├── 📁 controllers/
│   ├── 📁 models/
│   ├── 📁 routes/
│   ├── 📁 middlewares/
│   └── 📁 utils/
├── 📄 package.json
└── 📄 tsconfig.json (TypeScript only)
```

#### Installed Packages

**Core packages:**

-   express
-   compression@1.7.4
-   helmet
-   morgan
-   xss
-   dotenv
-   cors

**TypeScript packages (if selected):**

-   @types/express
-   @types/compression
-   @types/morgan
-   @types/cors
-   @types/node
-   typescript
-   ts-node
-   ts-node-dev

---

## 🎯 Complete Example

```typescript
import express from "express";
import GGToolsKit from "gg-tools-kit";

const app = express();
app.use(express.json());

// Initialize and apply all protections
const protections = new GGToolsKit.Protections();
protections.getAllMiddlewares().forEach((middleware) => app.use(middleware));

// Example route using utilities
app.post("/upload", (req, res) => {
    const filePath = req.body.filePath;

    // Get file information
    const fileSize = GGToolsKit.Utils.getFileSize(filePath, "MB");
    const fileExt = GGToolsKit.Utils.getFileExtension(filePath);
    const isImage = GGToolsKit.Utils.isImageFile(filePath);

    // Get request information
    const requestInfo = GGToolsKit.Utils.getReqInfos(req);

    // Get current date and time
    const uploadDate = GGToolsKit.Utils.today();
    const uploadTime = GGToolsKit.Utils.nowTime();

    res.json({
        file: { size: fileSize, extension: fileExt, isImage },
        request: requestInfo,
        timestamp: { date: uploadDate, time: uploadTime },
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

## 🔧 Configuration Examples

### Custom Logger

```typescript
const protections = new GGToolsKit.Protections();

protections.configure({
    logger: {
        format: "combined",
        filePath: "./logs/access.log",
    },
});
```

### Custom Compression

```typescript
protections.configure({
    compression: {
        threshold: 2048, // 2KB minimum
        level: 9, // Maximum compression
        memLevel: 9,
        chunkSize: 32768,
    },
});
```

### Custom Helmet Settings

```typescript
protections.configure({
    helmet: {
        contentSecurityPolicy: {
            directives: {
                "default-src": ["'self'"],
                "script-src": ["'self'", "'unsafe-inline'"],
                "style-src": ["'self'", "'unsafe-inline'"],
                "img-src": ["'self'", "data:", "https:"],
            },
        },
    },
});
```

---

## 📝 TypeScript Support

Full TypeScript support with type definitions included:

```typescript
import GGToolsKit from "gg-tools-kit";
import { Request, Response } from "express";

app.get("/info", (req: Request, res: Response) => {
    const info = GGToolsKit.Utils.getReqInfos(req);
    res.json(info);
});
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

ISC © MohenedGG

---

## 🔗 Links

-   **GitHub**: [MohenedGG/GGToolsKit](https://github.com/MohenedGG/GGToolsKit)
-   **npm**: [gg-tools-kit](https://www.npmjs.com/package/gg-tools-kit)

---

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

**Made with ❤️ by MohenedGG**
