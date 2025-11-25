import * as React from 'react';
import type Svg from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export type IconType = React.ForwardRefExoticComponent<
  SvgProps & {
    title?: string;
    color?: string;
    size?: string | number;
  } & React.RefAttributes<Svg>
>;
