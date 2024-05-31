/// <reference types="react" />
declare const RealSidebar: ({ isOpen, toggle, sidebarOptions, }: {
    isOpen: boolean;
    toggle: () => void;
    sidebarOptions: SidebarOption[];
}) => import("react").JSX.Element;
export default RealSidebar;
