import { useCallback, useEffect, useMemo, useState } from 'react';
import useResize from './useResize';

export enum Breakpoint {
  SM,
  LSM,
  SMD,
  MD,
  LG,
  XLG,
  MAX,
}

const useBreakpoint = (resetOnResize: boolean = true) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

  const getBreakpoint = useCallback((width: number) => {
    if (width >= 1584) return Breakpoint.MAX;
    if (width >= 1312) return Breakpoint.XLG;
    if (width >= 1056) return Breakpoint.LG;
    if (width >= 928) return Breakpoint.MD;
    if (width >= 800) return Breakpoint.SMD;
    if (width >= 672) return Breakpoint.LSM;
    return Breakpoint.SM;
  }, []);

  const updateBreakpoint = useCallback(
    () => setBreakpoint(getBreakpoint(window.innerWidth)),
    [getBreakpoint],
  );

  const reset = useCallback(() => setBreakpoint(undefined), []);

  useResize(updateBreakpoint, resetOnResize ? reset : undefined);

  useEffect(() => {
    updateBreakpoint();
  }, [updateBreakpoint]);

  const isLessThanMD = useMemo(
    () =>
      breakpoint &&
      [Breakpoint.SM, Breakpoint.LSM, Breakpoint.SMD].includes(breakpoint),
    [breakpoint],
  );

  const isLessThanSMD = useMemo(
    () => breakpoint && [Breakpoint.SM, Breakpoint.LSM].includes(breakpoint),
    [breakpoint],
  );

  return {
    breakpoint,
    isLessThanMD,
    isLessThanSMD,
  };
};

export default useBreakpoint;
