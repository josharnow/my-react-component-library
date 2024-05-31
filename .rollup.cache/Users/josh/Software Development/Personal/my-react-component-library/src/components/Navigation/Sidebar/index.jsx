"use client";
// import styles from "./styles.module.scss";
// import { classNames } from "@/src/app/_utils";
import ShadowSidebar from "./ShadowSidebar";
import RealSidebar from "./RealSidebar";
var Sidebar = function (_a) {
    var isOpen = _a.isOpen, toggle = _a.toggle, sidebarOptions = _a.sidebarOptions;
    return (<>
      <RealSidebar isOpen={isOpen} toggle={toggle} sidebarOptions={sidebarOptions}/>
      <ShadowSidebar isOpen={isOpen} toggle={toggle} sidebarOptions={sidebarOptions}/>
    </>);
};
export default Sidebar;
//# sourceMappingURL=index.jsx.map