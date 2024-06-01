import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { ReactNode } from 'react';
import * as rdd from 'react-device-detect';

type DeviceProps = {
    children: (props: typeof rdd) => ReactNode;
};
declare function Device(props: DeviceProps): _emotion_react_jsx_runtime.JSX.Element;

export { Device as default };
