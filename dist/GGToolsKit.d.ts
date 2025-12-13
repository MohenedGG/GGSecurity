import Init from "./containers/InitContainers";
import Protections from "./containers/ProtectionsContainer";
import Utils from "./containers/UtilsContainer";
declare class GGToolsKit {
    static Init: typeof Init;
    static Protections: typeof Protections;
    static Utils: typeof Utils;
}
export = GGToolsKit;
