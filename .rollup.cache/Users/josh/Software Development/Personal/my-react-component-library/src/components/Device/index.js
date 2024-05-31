import dynamic from 'next/dynamic';
var Device = dynamic(function () { return import('./Device'); }, { ssr: false });
export default Device;
//# sourceMappingURL=index.js.map