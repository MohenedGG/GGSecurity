"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InitContainers_1 = __importDefault(require("./containers/InitContainers"));
const ProtectionsContainer_1 = __importDefault(require("./containers/ProtectionsContainer"));
const UtilsContainer_1 = __importDefault(require("./containers/UtilsContainer"));
class GGToolsKit {
}
// Initialization Container
GGToolsKit.Init = InitContainers_1.default;
// Protections Container
GGToolsKit.Protections = ProtectionsContainer_1.default;
// Utils Container
GGToolsKit.Utils = UtilsContainer_1.default;
exports.default = GGToolsKit;
