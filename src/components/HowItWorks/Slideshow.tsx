import { useWindowSize } from '@react-hookz/web';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import DebugAnimationContext from './utils/DebugAnimationContext';
import InfographicAnimation, {
  InfographicAnimationProps,
} from './InfographicAnimation';
import classNames from 'classnames';

import styles from './Slideshow.module.scss';

const DEBUG_ANIMATIONS = false;

const steps = [
  {
    animationSize: 400,
    animationName: 'detect-gap',
    description: (
      <>
        Experiment locally, on a quantized version of the latest InstructLab
        model, with adding new <strong>knowledge and skills</strong>
      </>
    ),
  },
  {
    animationSize: 450,
    animationName: 'taxonomy',
    description: (
      <>
        Once a synthetic data recipe is ready, submit a pull request to
        contribute back to the InstructLab repository, which is organized in a
        structured <strong>taxonomy</strong>
      </>
    ),
  },
  {
    animationSize: 320,
    animationName: 'synthetic-data',
    description: (
      <>
        InstructLab uses the new recipes to systematically generate{' '}
        <strong>synthetic data</strong> for the new capabilities - and this data
        is released to the community
      </>
    ),
  },
  {
    animationSize: 400,
    animationName: 'fine-tune',
    description: (
      <>
        InstructLab <strong>merges</strong> the new skill back into the base
        model by updating it using all synthetic data generated to date, and
        releases a new model version to the community
      </>
    ),
  },
];

const SLIDE_HEIGHT = 800;

type SlideshowProps = {
  //
};

const Slideshow: FC<SlideshowProps> = () => {
  const slidesLength = 4;
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const { scrollYProgress } = useScroll({ target: wrapperRef });

  const slideNumber = useTransform(() => {
    const result = Math.floor(scrollYProgress.get() * slidesLength);
    return result === slidesLength ? result - 1 : result;
  });

  // DEBUG_ANIMATIONS
  const debugSlideProgress = useTransform(
    () => (scrollYProgress.get() * slidesLength) % 1,
  );

  const wrapperHeight = useMemo(
    () => slidesLength * SLIDE_HEIGHT,
    [slidesLength],
  );

  const scrollStart = useRef(0);
  const scrollEnd = useRef(0);

  useEffect(() => {
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();
    if (!wrapperRect) {
      return;
    }

    scrollStart.current = window.scrollY + wrapperRect.top;
    scrollEnd.current = scrollStart.current + wrapperHeight - windowHeight;

    if (window.scrollY > scrollStart.current && scrollYProgress.get() === 0) {
      window.scrollTo({ top: scrollStart.current });
    } else if (
      window.scrollY < scrollStart.current &&
      scrollYProgress.get() > 0
    ) {
      scrollYProgress.set(0);
    }
  }, [scrollYProgress, windowHeight, windowWidth, wrapperHeight]);

  const scrollToSlide = useCallback((idx: number) => {
    if (!scrollStart.current || !scrollEnd.current) return;
    const scrollHeightPerSlide =
      (scrollEnd.current - scrollStart.current) / slidesLength;
    const slidePosition = Math.ceil(
      scrollStart.current + scrollHeightPerSlide * idx,
    );
    window.scrollTo({ top: slidePosition, behavior: 'instant' });
  }, []);

  const switchSlide = useCallback(
    (idx: number) => {
      if (currentSlide !== idx) {
        setCurrentSlide(idx);
      }
    },
    [currentSlide],
  );

  useMotionValueEvent(slideNumber, 'change', idx => {
    switchSlide(idx);
  });

  return (
    <DebugAnimationContext.Provider value={DEBUG_ANIMATIONS}>
      <div
        className={styles.slideshowWrapper}
        style={{ height: `${wrapperHeight}px` }}
        ref={wrapperRef}
      >
        {DEBUG_ANIMATIONS ? (
          <motion.div
            className={styles.debugProgressBar}
            style={{
              scaleX: debugSlideProgress,
            }}
          />
        ) : null}

        <div className={styles.slideshow}>
          <h2>How it works</h2>
          <div className={styles.slideshow__slides}>
            <div className={styles.cardWrapper}>
              {steps.map((d, i) => (
                <div
                  key={`howitworks_${i}`}
                  className={classNames(styles.stepWrapper, styles.column, {
                    [styles.active]: currentSlide === i,
                  })}
                  onClick={() => scrollToSlide(i)}
                >
                  <div className={styles.animWrapper}>
                    <InfographicAnimation
                      size={d.animationSize}
                      kind={
                        d.animationName as InfographicAnimationProps['kind']
                      }
                      isOn={currentSlide === i}
                    />
                  </div>

                  <div className={styles.footer}>
                    <div className={styles.order}>{Number(i) + 1}</div>
                    <div className={styles.description}>{d.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DebugAnimationContext.Provider>
  );
};

export default memo(Slideshow);
