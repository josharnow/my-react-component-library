/// <reference types="react" />
declare const ShadowSidebar: ({ isOpen, toggle, sidebarOptions, }: {
    isOpen: boolean;
    toggle: () => void;
    sidebarOptions: SidebarOption[];
}) => import("react").JSX.Element;
export default ShadowSidebar;
