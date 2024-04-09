import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Variants, cubicBezier, motion, useInView } from 'framer-motion';

import styles from './TaxonomyTree.module.scss';

type NodeProps = {
  children?: (ref: RefObject<HTMLDivElement>) => ReactNode;
  className?: string;
  dashed?: boolean;
  idx?: number;
  label?: string;
  left?: number | string;
  parent?: RefObject<HTMLDivElement>;
  selected?: boolean;
  top?: number | string;
  width?: number | string;
};

const NODE_DELAY = 0.15;
const LINE_DRAW_SPEED = 0.4;
const NODE_DRAW_SPEED = 0.4;
const LABEL_DRAW_SPEED = 0.5;

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
      delay: idx * NODE_DELAY + LINE_DRAW_SPEED + NODE_DRAW_SPEED,
      duration: LABEL_DRAW_SPEED,
    },
  }),
};

const linkVariants: Variants = {
  initial: { pathLength: 0 },
  draw: idx => ({
    pathLength: 1,
    transition: {
      delay: idx * NODE_DELAY,
      duration: LINE_DRAW_SPEED,
      ease: cubicBezier(0.36, 0.2, 0.35, 0.79),
    },
  }),
};

const Link: FC<{
  idx?: number;
  src: RefObject<HTMLDivElement>;
  dest: RefObject<HTMLDivElement>;
  dashed?: boolean;
  selected?: boolean;
}> = ({ src, dest, dashed, selected, idx }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered || !src.current || !dest?.current) return null;

  const r = 16;

  const x0 = src.current.offsetLeft + src.current.offsetWidth;
  const x2 = dest.current.offsetLeft;
  const x1 = (x0 + x2) / 2;

  const y0 = src.current.offsetTop + src.current.offsetHeight / 2;
  const y1 = dest.current.offsetTop + dest.current.offsetHeight / 2;

  return (
    <svg fill="none" className={styles.link}>
      <motion.path
        className={classNames({
          [styles.dashed]: dashed,
          [styles.selected]: selected,
        })}
        d={
          y1 - y0 >= r
            ? `\
          M${x0} ${y0}\
          H${x1 - r}\
          C${x1 - r / 2} ${y0} ${x1} ${y0 + r / 2} ${x1} ${y0 + r}\
          V${y1 - r}\
          C${x1} ${y1 - r / 2} ${x1 + r / 2} ${y1} ${x1 + r} ${y1}\
          H${x2}`
            : y1 - y0 <= -r
              ? `\
          M${x0} ${y0}\
          H${x1 - r}\
          C${x1 - r / 2} ${y0} ${x1} ${y0 - r / 2} ${x1} ${y0 - r}\
          V${y1 + r}\
          C${x1} ${y1 + r / 2} ${x1 + r / 2} ${y1} ${x1 + r} ${y1}\
          H${x2}`
              : `M${x0} ${y0}H${x2}`
        }
        strokeDasharray={dashed ? '5 5' : undefined}
        variants={linkVariants}
        initial="initial"
        animate="draw"
        custom={idx}
      />
    </svg>
  );
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
        initial="initial"
        animate="draw"
        custom={idx}
      >
        <motion.div
          className={styles.background}
          variants={nodeBackgroundVariants}
          custom={idx}
        ></motion.div>
        <motion.span variants={nodeLabelVariants} custom={idx}>
          {label}
        </motion.span>
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

const TaxonomyTree: FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const inView = useInView(animationRef, { once: true });

  return (
    <div className={styles.tree} ref={animationRef}>
      {inView ? (
        <Node top={90} label="compositional skills" idx={0} selected>
          {parent1Ref => (
            <>
              <Node
                top={0}
                left={col}
                parent={parent1Ref}
                width={103}
                idx={1}
              />
              <Node
                top={25}
                left={col}
                parent={parent1Ref}
                width={83}
                idx={2}
              />
              <Node
                top={50}
                left={col}
                parent={parent1Ref}
                width={124}
                idx={3}
              />

              <Node
                top={90}
                left={col}
                parent={parent1Ref}
                width={66}
                idx={4}
              />

              <Node top={130} left={col} parent={parent1Ref} width={90} idx={5}>
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
                top={430}
                left={col}
                parent={parent1Ref}
                width={96}
                idx={6}
              />
              <Node
                top={455}
                left={col}
                parent={parent1Ref}
                width={77}
                idx={7}
              />
              <Node
                top={480}
                left={col}
                parent={parent1Ref}
                width={84}
                idx={8}
              />
              <Node
                top={505}
                left={col}
                parent={parent1Ref}
                width={104}
                idx={9}
              />

              <Node
                top={380}
                left={col}
                parent={parent1Ref}
                label="writing"
                idx={10}
                selected
              >
                {parent2Ref => (
                  <>
                    <Node
                      top={290}
                      left={col * 2}
                      parent={parent2Ref}
                      width={83}
                      idx={11}
                    />
                    <Node
                      top={315}
                      left={col * 2}
                      parent={parent2Ref}
                      width={97}
                      idx={12}
                    />
                    <Node
                      top={340}
                      left={col * 2}
                      parent={parent2Ref}
                      width={66}
                      idx={13}
                    />

                    <Node
                      top={430}
                      left={col * 2}
                      parent={parent2Ref}
                      width={132}
                      idx={14}
                    />
                    <Node
                      top={455}
                      left={col * 2}
                      parent={parent2Ref}
                      width={83}
                      idx={15}
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
                      top={480}
                      left={col * 2}
                      parent={parent2Ref}
                      width={117}
                      idx={16}
                    />
                    <Node
                      top={265}
                      left={col * 2}
                      parent={parent2Ref}
                      label="freeform"
                      idx={17}
                      selected
                    >
                      {parent3Ref => (
                        <>
                          <Node
                            top={155}
                            left={col * 3}
                            parent={parent3Ref}
                            width={62}
                            idx={18}
                          />
                          <Node
                            top={205}
                            left={col * 3}
                            parent={parent3Ref}
                            width={81}
                            idx={19}
                          />
                          <Node
                            top={230}
                            left={col * 3}
                            parent={parent3Ref}
                            width={66}
                            idx={20}
                          />
                          <Node
                            top={180}
                            left={col * 3}
                            parent={parent3Ref}
                            label="poetry"
                            idx={21}
                            selected
                          >
                            {parent4Ref => (
                              <>
                                <Node
                                  top={20}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Animal jokes"
                                  idx={22}
                                />
                                <Node
                                  top={45}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Bad jokes"
                                  idx={23}
                                />
                                <Node
                                  top={70}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Birthday jokes"
                                  idx={24}
                                />
                                <Node
                                  top={120}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="Animal puns"
                                  idx={25}
                                />

                                <Node
                                  top={230}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="knock knock jokes"
                                  idx={26}
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
                                  top={255}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="charade"
                                  idx={27}
                                />
                                <Node
                                  top={95}
                                  left={col * 4}
                                  parent={parent4Ref}
                                  label="haiku"
                                  idx={28}
                                  selected
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
