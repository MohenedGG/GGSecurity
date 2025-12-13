"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Audio_1 = __importDefault(require("../utils/Audio"));
const Vidoe_1 = __importDefault(require("../utils/Vidoe"));
const Files_1 = __importDefault(require("../utils/Files"));
const Date_1 = __importDefault(require("../utils/Date"));
const RequestData_1 = __importDefault(require("../utils/RequestData"));
const Array_1 = __importDefault(require("../utils/Array"));
class Utils {
    // Audio Utils
    static getAudioDuration(filePath) {
        return this.audio.getAudioDuration(filePath);
    }
    // Video Utils
    static getVideoDuration(filePath) {
        return this.video.getVideoDuration(filePath);
    }
    // File Utils
    static getFileSize(filePath, unit = "KB") {
        return this.file.getFileSize(filePath, unit);
    }
    static getFileExtension(filePath) {
        return this.file.getFileExtension(filePath);
    }
    static isImageFile(filePath) {
        return this.file.isImageFile(filePath);
    }
    static isVideoFile(filePath) {
        return this.file.isVideoFile(filePath);
    }
    static isAudioFile(filePath) {
        return this.file.isAudioFile(filePath);
    }
    static isDocumentFile(filePath) {
        return this.file.isDocumentFile(filePath);
    }
    static isArchiveFile(filePath) {
        return this.file.isArchiveFile(filePath);
    }
    // Date Utils
    static today(separator = "/") {
        return this.date.today(separator);
    }
    static nowTime(separator = ":") {
        return this.date.nowTime(separator);
    }
    // RequestData Utils
    static getRequestIp(req) {
        return RequestData_1.default.getRequestIp(req);
    }
    static getRequestMethod(req) {
        return RequestData_1.default.getRequestMethod(req);
    }
    static getRequestApi(req) {
        return RequestData_1.default.getRequestApi(req);
    }
    static getRequestUserAgent(req) {
        return RequestData_1.default.getRequestUserAgent(req);
    }
    static getReqInfos(req) {
        return RequestData_1.default.getReqInfos(req);
    }
    // Array Utils
    static shuffleArray(array) {
        return Array_1.default.shuffle(array);
    }
    static removeDuplicatesFromArray(array) {
        return Array_1.default.removeDuplicates(array);
    }
    static getRandomElement(array) {
        return Array_1.default.getRandomElement(array);
    }
    static flattenArray(array) {
        return Array_1.default.flatten(array);
    }
    static maxFromArray(array) {
        return Array_1.default.max(array);
    }
    static minFromArray(array) {
        return Array_1.default.min(array);
    }
    static sumArray(array) {
        return Array_1.default.sum(array);
    }
    static averageArray(array) {
        return Array_1.default.average(array);
    }
}
Utils.audio = Audio_1.default;
Utils.video = Vidoe_1.default;
Utils.file = Files_1.default;
Utils.date = Date_1.default;
exports.default = Utils;
