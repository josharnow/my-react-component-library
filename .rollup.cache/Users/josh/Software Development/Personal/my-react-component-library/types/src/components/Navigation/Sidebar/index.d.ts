/// <reference types="react" />
declare const Sidebar: ({ isOpen, toggle, sidebarOptions, }: {
    isOpen: boolean;
    toggle: () => void;
    sidebarOptions: SidebarOption[];
}) => import("react").JSX.Element;
export default Sidebar;
