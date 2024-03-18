'use client';

import {
  EasingFunction,
  Variants,
  cubicBezier,
  easeInOut,
  motion,
} from 'framer-motion';
import { FC, useMemo } from 'react';

import styles from './Cube.module.scss';

type Phase = [number, number, EasingFunction?];

const phaseTransition = ([start, end, easing]: Phase) => ({
  delay: start,
  duration: end - start,
  ease: easing,
});

const Cube: FC = () => {
  const animationPhases: Record<string, Phase> = useMemo(
    () => ({
      moveUp: [0.4, 1.3, cubicBezier(0.56, 0.01, 0.45, 0.99)],
      showTile: [1.5, 2.3, easeInOut],
      showShape: [1.5, 2.3, easeInOut],
      removeTileOutline: [1.6, 2.4, easeInOut],
      removeShapeOutline: [1.6, 2.4, easeInOut],
      straightenTile: [2.8, 3.7, easeInOut],
      straightenShape: [2.9, 3.6, easeInOut],
      moveTileToSpot: [2.2, 4, cubicBezier(0.56, 0.01, 0.45, 0.99)],
      moveShapeToSpot: [2.6, 3.8, cubicBezier(0.56, 0.01, 0.45, 0.99)],
    }),
    [],
  );

  const detachedCubeVariants: Variants = useMemo(() => {
    const {
      moveUp,
      showTile,
      removeTileOutline,
      straightenTile,
      moveTileToSpot,
    } = animationPhases;

    return {
      initial: {
        top: 313,
        opacity: 1,
      },
      initialOutline: {
        opacity: 1,
      },
      initialTile: {
        opacity: 0,
        scale: '1, 1',
      },
      slideUp: {
        top: 0,
        transition: phaseTransition(moveUp),
      },
      showTile: {
        opacity: 1,
        transition: phaseTransition(showTile),
      },
      removeOutline: {
        opacity: 0,
        transition: phaseTransition(removeTileOutline),
      },
      straighten: {
        scale: '1.0775, 1.86',
        transition: phaseTransition(straightenTile),
      },
      rotate: {
        transform: 'rotate(-105deg) translateX(-7px) translateY(83px)',
        transition: phaseTransition(moveTileToSpot),
      },
    };
  }, [animationPhases]);

  const cubeVariants: Variants = useMemo(() => {
    const { showShape, removeShapeOutline, straightenShape, moveShapeToSpot } =
      animationPhases;
    return {
      initial: {
        opacity: 1,
      },
      initialShape: {
        opacity: 0,
        scale: '1, 1',
      },
      showShape: {
        opacity: 1,
        transition: phaseTransition(showShape),
      },
      removeOutline: {
        opacity: 0,
        transition: phaseTransition(removeShapeOutline),
      },
      straighten: {
        scale: '1.06, 1.83',
        transition: phaseTransition(straightenShape),
      },
      rotate: {
        transform: 'rotate(75deg) translateX(89px) translateY(-41px)',
        transition: phaseTransition(moveShapeToSpot),
      },
    };
  }, [animationPhases]);

  return (
    <div className={styles.cubeWrapper}>
      <motion.svg
        width="341"
        height="576"
        viewBox="0 0 341 576"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.detachedCube}
        variants={detachedCubeVariants}
        viewport={{ once: true, amount: 0.4 }}
        initial="initial"
        whileInView={['slideUp', 'rotate']}
        overflow="visible"
      >
        <motion.g
          viewport={{ once: true, amount: 0.4 }}
          variants={detachedCubeVariants}
          initial="initialOutline"
          whileInView="removeOutline"
        >
          <path
            d="M233.591 33.5246L177.268 1L120.945 33.5246L177.268 66.0491L233.591 33.5246Z"
            fill="#5A00FF"
          />
          <path
            d="M233.591 33.5246L177.268 1L120.945 33.5246L177.268 66.0491L233.591 33.5246Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M178.062 131.097L233.592 98.8367V34.3164L178.062 66.5765V131.097Z"
            fill="#5A00FF"
          />
          <path
            d="M178.062 131.097L233.592 98.8367V34.3164L178.062 66.5765V131.097Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M178.062 131.097V66.5765L120.945 34.3164V98.8367L178.062 131.097Z"
            fill="#5A00FF"
          />
          <path
            d="M178.062 131.097V66.5765L120.945 34.3164V98.8367L178.062 131.097Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.path
          d="M233.591 33.5246L177.268 1L120.945 33.5246L177.268 66.0491L233.591 33.5246Z"
          fill="white"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          variants={detachedCubeVariants}
          viewport={{ once: true, amount: 0.4 }}
          initial="initialTile"
          whileInView={['showTile', 'straighten']}
        />
      </motion.svg>

      <motion.svg
        width="341"
        height="576"
        viewBox="0 0 341 576"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        variants={cubeVariants}
        viewport={{ once: true, amount: 0.4 }}
        initial="initial"
        whileInView={['rotate']}
      >
        <motion.g
          variants={cubeVariants}
          viewport={{ once: true, amount: 0.4 }}
          initial="initial"
          whileInView={['removeOutline']}
        >
          <path
            d="M226.583 215.844L170.052 183.205L113.521 215.844L170.052 248.484L226.583 215.844Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M57.5799 509.86V444.582L1.04883 411.942V477.221L57.5799 509.86Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M114.295 542.541V477.262L57.7637 444.623V509.902L114.295 542.541Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M283.738 509.632L340.269 476.993V411.714L283.738 444.353V509.632Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M169.87 248.53L113.339 215.891L56.8076 248.53L113.339 281.169L169.87 248.53Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M227.163 542.273L283.694 509.633V444.354L227.163 476.994V542.273Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M57.5799 444.492V379.214L1.04883 346.574V411.853L57.5799 444.492Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M283.483 444.317L340.014 411.677V346.398L283.483 379.038V444.317Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M114.013 476.998V411.719L57.4824 379.08V444.359L114.013 476.998Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M170.589 574.915L227.12 542.276V476.997L170.589 509.636V574.915Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M170.589 574.915V509.636L114.058 476.997V542.276L170.589 574.915Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M227.163 476.998L283.694 444.359V379.08L227.163 411.719V476.998Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M227.12 411.721L170.589 379.082L114.058 411.721L170.589 444.361L227.12 411.721Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M170.589 509.632L227.12 476.993V411.714L170.589 444.353V509.632Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M170.589 509.632V444.353L114.058 411.714V476.993L170.589 509.632Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M283.297 248.53L226.766 215.891L170.235 248.53L226.766 281.169L283.297 248.53Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M340.013 281.211L283.482 248.571L226.951 281.211L283.482 313.85L340.013 281.211Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M283.483 379.125L340.014 346.486V281.207L283.483 313.846V379.125Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M226.585 281.211L170.054 248.571L113.523 281.211L170.054 313.85L226.585 281.211Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M283.303 313.892L226.772 281.253L170.241 313.892L226.772 346.532L283.303 313.892Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M226.772 411.805L283.304 379.165V313.887L226.772 346.526V411.805Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M226.772 411.805V346.526L170.241 313.887V379.165L226.772 411.805Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M57.5799 379.123V313.844L1.04883 281.205V346.484L57.5799 379.123Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M114.295 411.805L170.826 379.165V313.887L114.295 346.526V411.805Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M114.295 411.805V346.526L57.7637 313.887V379.165L114.295 411.805Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M170.826 313.892L114.295 281.253L57.7637 313.892L114.295 346.532L170.826 313.892Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M114.111 281.211L57.5799 248.571L1.04883 281.211L57.5799 313.85L114.111 281.211Z"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.path
          d="M170.052 183.205L340.013 281.211L226.772 346.532L170.054 313.85L114.295 346.532L1.04883 281.211L170.052 183.205Z"
          fill="white"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          variants={cubeVariants}
          viewport={{ once: true, amount: 0.4 }}
          initial="initialShape"
          whileInView={['showShape', 'straighten']}
        />
      </motion.svg>
    </div>
  );
};

export default Cube;
