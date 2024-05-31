import * as rdd from 'react-device-detect';
// interface DeviceProps {
//   children: (props: typeof rdd) => ReactNode
// }
export default function Device(props) {
    return <div className="device-layout-component">{props.children(rdd)}</div>;
}
//# sourceMappingURL=Device.jsx.map