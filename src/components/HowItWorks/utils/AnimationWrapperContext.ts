import { createContext } from 'react';

import WrapperSize from './WrapperSize';

const AnimationWrapperContext = createContext<WrapperSize | undefined>(
  undefined,
);

export default AnimationWrapperContext;
