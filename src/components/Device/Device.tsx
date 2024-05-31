// NOTE - https://stackoverflow.com/questions/59494037/how-to-detect-the-device-on-react-ssr-app-with-next-js
import { ReactNode } from 'react';
import * as rdd from 'react-device-detect';

type DeviceProps = {
  children: (props: typeof rdd) => ReactNode
}
export default function Device(props: DeviceProps) {
  return <div className="device-layout-component">{ props.children(rdd) }</div>
}