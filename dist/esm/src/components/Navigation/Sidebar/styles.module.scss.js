import e from"../../../../node_modules/style-inject/dist/style-inject.es.js";var n={sidebarContainer:"styles-module_sidebarContainer__NBkxk",shadowSidebarContainer:"styles-module_shadowSidebarContainer__BKKiL","smooth-appear-for-real":"styles-module_smooth-appear-for-real__ALBtL","smooth-appear":"styles-module_smooth-appear__O9OY7","smooth-disappear":"styles-module_smooth-disappear__REb9B"};e("@keyframes styles-module_smooth-appear__O9OY7 {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes styles-module_smooth-appear-for-real__ALBtL {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n    box-shadow: -5px 0 11px rgba(10, 36, 173, 0.68) inset;\n  }\n}\n@keyframes styles-module_smooth-disappear__REb9B {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n    display: none;\n  }\n}\n.styles-module_sidebarContainer__NBkxk,\n.styles-module_shadowSidebarContainer__BKKiL {\n  background: white;\n  width: fit-content;\n  transform: translateX(-100%);\n}\n\n.styles-module_sidebarContainer__NBkxk {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  animation: styles-module_smooth-appear-for-real__ALBtL 1s ease forwards;\n}\n\n.styles-module_shadowSidebarContainer__BKKiL {\n  z-index: 0;\n  animation: styles-module_smooth-appear__O9OY7 1s ease forwards;\n}");export{n as default};
//# sourceMappingURL=styles.module.scss.js.map