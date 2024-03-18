import { MotionValue, useTransform } from 'framer-motion';

const useAnimationProgress = (
  idx: number,
  scrollPosition: MotionValue<number>,
) =>
  useTransform(() => {
    const overalProgress = scrollPosition.get();

    // Avoid jumping to 99% while running the exit animation
    // after scrolling to previous slide.
    if (overalProgress < idx) return 0;

    if (overalProgress >= idx + 1) return 1;
    return overalProgress % 1;
  });

export default useAnimationProgress;
