import { ReactNode } from 'react';
import * as rdd from 'react-device-detect';
type DeviceProps = {
    children: (props: typeof rdd) => ReactNode;
};
export default function Device(props: DeviceProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
