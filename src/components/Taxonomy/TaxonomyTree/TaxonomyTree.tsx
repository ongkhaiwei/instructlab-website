import { FC, ReactNode, RefObject, useRef } from 'react';
import classNames from 'classnames';
import { Variants, motion, useInView } from 'framer-motion';
import Link from './Link';

import styles from './TaxonomyTree.module.scss';

type NodeProps = {
  children?: (ref: RefObject<HTMLDivElement>) => ReactNode;
  className?: string;
  dashed?: boolean;
  idx: number;
  label?: string;
  left?: number | string;
  parent?: RefObject<HTMLDivElement>;
  selected?: boolean;
  simulateTyping?: boolean;
  top?: number | string;
  width?: number | string;
};

export const NODE_DELAY = 0.18;
export const LINE_DRAW_SPEED = 0.5;
const NODE_DRAW_SPEED = 0.5;
const LABEL_DRAW_SPEED = 0.3;
const TIMING_OVERLAP = 0.2;

const nodeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  draw: idx => ({
    opacity: 1,
    transition: {
      delay: idx * NODE_DELAY + LINE_DRAW_SPEED - TIMING_OVERLAP,
      duration: NODE_DRAW_SPEED,
    },
  }),
};

const nodeBackgroundVariants: Variants = {
  initial: {
    left: '-100%',
  },
  draw: idx => ({
    left: 0,
    transition: {
      delay: idx * NODE_DELAY + LINE_DRAW_SPEED,
      duration: NODE_DRAW_SPEED,
    },
  }),
};

const nodeLabelVariants: Variants = {
  initial: {
    opacity: 0,
  },
  draw: idx => ({
    opacity: 1,
    transition: {
      delay:
        idx * NODE_DELAY + LINE_DRAW_SPEED + NODE_DRAW_SPEED - TIMING_OVERLAP,
      duration: LABEL_DRAW_SPEED,
    },
  }),
};

const typedTextVariants: Variants = {
  initial: {
    opacity: 0,
  },
  draw: ({ nodeIdx, charIdx }) => ({
    opacity: 1,
    transition: {
      delay:
        nodeIdx * NODE_DELAY +
        LINE_DRAW_SPEED +
        NODE_DRAW_SPEED +
        0.2 * charIdx +
        Math.random() * 0.2,
      duration: 0.01,
    },
  }),
};

const Node: FC<NodeProps> = ({
  children: renderChildren,
  className,
  dashed,
  idx,
  label,
  left,
  parent,
  selected,
  simulateTyping,
  top,
  width,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        ref={ref}
        className={classNames(styles.node, className, {
          [styles.dashed]: dashed,
          [styles.selected]: selected,
        })}
        style={{ top, left, width }}
        variants={nodeVariants}
        initial="initial"
        animate="draw"
        custom={idx}
      >
        <motion.div
          className={styles.background}
          variants={nodeBackgroundVariants}
          custom={idx}
        ></motion.div>
        {simulateTyping && label ? (
          Array.from(label).map((char, i) => (
            <motion.span
              key={i}
              variants={typedTextVariants}
              custom={{ nodeIdx: idx, charIdx: i }}
            >
              {char}
            </motion.span>
          ))
        ) : (
          <motion.span variants={nodeLabelVariants} custom={idx}>
            {label}
          </motion.span>
        )}
      </motion.div>
      {parent ? (
        <Link
          src={parent}
          dest={ref}
          dashed={dashed}
          selected={selected}
          idx={idx}
        />
      ) : null}
      {renderChildren?.(ref)}
    </>
  );
};

const col = 250;
const selectedNodeDelay = 2;
const lvlDelay = 6;
const lvl0 = 0;
const lvl1 = lvl0 + 1 + lvlDelay;
const lvl2 = lvl1 + 10 + lvlDelay;
const lvl3 = lvl2 + 7 + lvlDelay;
const lvl4 = lvl3 + 4 + lvlDelay;

const TaxonomyTree: FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const inView = useInView(animationRef, { once: true });

  return (
    <div className={styles.tree} ref={animationRef}>
      {inView ? (
        <Node top={110} label="compositional skills" idx={lvl0 + 0} selected>
          {parent1Ref => (
            <>
              <Node
                top={0}
                left={col}
                parent={parent1Ref}
                width={103}
                idx={lvl1 + 0}
              />
              <Node
                top={30}
                left={col}
                parent={parent1Ref}
                width={83}
                idx={lvl1 + 1}
              />
              <Node
                top={60}
                left={col}
                parent={parent1Ref}
                width={124}
                idx={lvl1 + 2}
              />

              <Node
                top={110}
                left={col}
                parent={parent1Ref}
                width={66}
                idx={lvl1 + 3}
              />

              <Node
                top={170}
                left={col}
                parent={parent1Ref}
                width={90}
                idx={lvl1 + 4}
              >
                {/* {parent2Ref => (
                  <>
                    <Node
                      top={90}
                      left={col * 2}
                      parent={parent2Ref}
                      width={75}
                      idx={7}
                    />

                    <Node
                      top={165}
                      left={col * 2}
                      parent={parent2Ref}
                      width={83}
                      idx={8}
                    />
                    <Node
                      top={190}
                      left={col * 2}
                      parent={parent2Ref}
                      width={64}
                      idx={9}
                    />
                  </>
                )} */}
              </Node>

              {/* <Node
                top={155}
                left={col}
                parent={parent1Ref}
                width={66}
                dashed
                idx={33}
              /> */}

              <Node
                top={410}
                left={col}
                parent={parent1Ref}
                width={96}
                idx={lvl1 + 5}
              />
              <Node
                top={440}
                left={col}
                parent={parent1Ref}
                width={77}
                idx={lvl1 + 6}
              />
              <Node
                top={470}
                left={col}
                parent={parent1Ref}
                width={84}
                idx={lvl1 + 7}
              />
              <Node
                top={500}
                left={col}
                parent={parent1Ref}
                width={104}
                idx={lvl1 + 8}
              />

              <Node
                top={360}
                left={col}
                parent={parent1Ref}
                label="writing"
                idx={lvl1 + 9 + selectedNodeDelay}
                selected
              >
                {parent2Ref => (
                  <>
                    <Node
                      top={250}
                      left={col * 2}
                      parent={parent2Ref}
                      width={83}
                      idx={lvl2 + 0}
                    />
                    <Node
                      top={280}
                      left={col * 2}
                      parent={parent2Ref}
                      width={97}
                      idx={lvl2 + 1}
                    />
                    <Node
                      top={310}
                      left={col * 2}
                      parent={parent2Ref}
                      width={66}
                      idx={lvl2 + 2}
                    />

                    <Node
                      top={410}
                      left={col * 2}
                      parent={parent2Ref}
                      width={132}
                      idx={lvl2 + 3}
                    />
                    <Node
                      top={440}
                      left={col * 2}
                      parent={parent2Ref}
                      width={83}
                      idx={lvl2 + 4}
                    />
                    {/* <Node
                      top={505}
                      left={col * 2}
                      parent={parent2Ref}
                      width={66}
                      dashed
                      idx={34}
                    /> */}
                    <Node
                      top={470}
                      left={col * 2}
                      parent={parent2Ref}
                      width={117}
                      idx={lvl2 + 5}
                    />
                    <Node
                      top={220}
                      left={col * 2}
                      parent={parent2Ref}
                      label="freeform"
                      idx={lvl2 + 6 + selectedNodeDelay}
                      selected
                    >
                      {parent3Ref => (
                        <>
                          <Node
                            top={100}
                            left={col * 3}
                            parent={parent3Ref}
                            width={62}
                            idx={lvl3 + 0}
                          />
                          <Node
                            top={160}
                            left={col * 3}
                            parent={parent3Ref}
                            width={81}
                            idx={lvl3 + 1}
                          />
                          <Node
                            top={190}
                            left={col * 3}
                            parent={parent3Ref}
                            width={66}
                            idx={lvl3 + 2}
                          />
                          <Node
                            top={130}
                            left={col * 3}
                            parent={parent3Ref}
                            label="poetry"
                            idx={lvl3 + 3 + selectedNodeDelay}
                            selected
                          >
                            {parent4Ref => (
                              <>
                                <Node
                                  top={-50}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Ballad"
                                  idx={lvl4 + 0}
                                />
                                <Node
                                  top={-20}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Epic"
                                  idx={lvl4 + 1}
                                />
                                <Node
                                  top={10}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Freeverse"
                                  idx={lvl4 + 2}
                                />
                                <Node
                                  top={40}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Limerick"
                                  idx={lvl4 + 3}
                                />
                                <Node
                                  top={70}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Narrative poetry"
                                  idx={lvl4 + 4}
                                />

                                <Node
                                  top={190}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Ode sonnet"
                                  idx={lvl4 + 5}
                                />
                                {/* <Node
                                    top={280}
                                    left={col * 4}
                                    parent={parent4Ref}
                                    width={66}
                                    dashed
                                    idx={35}
                                  /> */}
                                <Node
                                  top={220}
                                  left={col * 4}
                                  width={57}
                                  parent={parent4Ref}
                                  label="Haiku"
                                  idx={lvl4 + 12}
                                  dashed
                                  simulateTyping
                                />
                              </>
                            )}
                          </Node>
                        </>
                      )}
                    </Node>
                  </>
                )}
              </Node>
            </>
          )}
        </Node>
      ) : null}
    </div>
  );
};

export default TaxonomyTree;
