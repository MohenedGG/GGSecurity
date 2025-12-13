import Init from "./containers/InitContainers";
import Protections from "./containers/ProtectionsContainer";
import Utils from "./containers/UtilsContainer";
export default class GGToolsKit {
    static Init: typeof Init;
    static Protections: typeof Protections;
    static Utils: typeof Utils;
}
