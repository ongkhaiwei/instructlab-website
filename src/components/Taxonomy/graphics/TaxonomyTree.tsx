import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './TaxonomyTree.module.scss';

type NodeProps = {
  children?: (ref: RefObject<HTMLDivElement>) => ReactNode;
  className?: string;
  dashed?: boolean;
  label?: string;
  left?: number | string;
  parent?: RefObject<HTMLDivElement>;
  top?: number | string;
  width?: number | string;
};

const Link: FC<{
  src: RefObject<HTMLDivElement>;
  dest: RefObject<HTMLDivElement>;
  dashed?: boolean;
}> = ({ src, dest, dashed }) => {
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
      <path
        className={classNames({ [styles.dashed]: dashed })}
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
      />
    </svg>
  );
};

const Node: FC<NodeProps> = ({
  children: renderChildren,
  className,
  dashed,
  label,
  left,
  parent,
  top,
  width,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={ref}
        className={classNames(styles.node, className, {
          [styles.dashed]: dashed,
        })}
        style={{ top, left, width }}
      >
        {label}
      </div>
      {parent ? <Link src={parent} dest={ref} dashed={dashed} /> : null}
      {renderChildren?.(ref)}
    </>
  );
};

const col = 250;

const TaxonomyTree: FC = () => {
  return (
    <div className={styles.tree}>
      <Node top={90} label="compositional skills">
        {parent1Ref => (
          <>
            <Node top={0} left={col} parent={parent1Ref} width={103} />
            <Node top={25} left={col} parent={parent1Ref} width={83} />
            <Node top={50} left={col} parent={parent1Ref} width={124} />

            <Node top={90} left={col} parent={parent1Ref} width={66} />

            <Node top={130} left={col} parent={parent1Ref} width={90}>
              {parent2Ref => (
                <>
                  <Node
                    top={90}
                    left={col * 2}
                    parent={parent2Ref}
                    width={75}
                  />

                  <Node
                    top={165}
                    left={col * 2}
                    parent={parent2Ref}
                    width={83}
                  />
                  <Node
                    top={190}
                    left={col * 2}
                    parent={parent2Ref}
                    width={64}
                  />
                </>
              )}
            </Node>
            <Node top={155} left={col} parent={parent1Ref} width={66} dashed />

            <Node top={380} left={col} parent={parent1Ref} label="writing">
              {parent2Ref => (
                <>
                  <Node
                    top={265}
                    left={col * 2}
                    parent={parent2Ref}
                    label="freeform"
                  >
                    {parent3Ref => (
                      <>
                        <Node
                          top={155}
                          left={col * 3}
                          parent={parent3Ref}
                          width={62}
                        />
                        <Node
                          top={180}
                          left={col * 3}
                          parent={parent3Ref}
                          label="poetry"
                        >
                          {parent4Ref => (
                            <>
                              <Node
                                top={20}
                                left={col * 4}
                                parent={parent4Ref}
                                label="Animal jokes"
                              />
                              <Node
                                top={45}
                                left={col * 4}
                                parent={parent4Ref}
                                label="Bad jokes"
                              />
                              <Node
                                top={70}
                                left={col * 4}
                                parent={parent4Ref}
                                label="Birthday jokes"
                              />
                              <Node
                                top={95}
                                left={col * 4}
                                parent={parent4Ref}
                                label="haiku"
                              />
                              <Node
                                top={120}
                                left={col * 4}
                                parent={parent4Ref}
                                label="Animal puns"
                              />

                              <Node
                                top={230}
                                left={col * 4}
                                parent={parent4Ref}
                                label="knock knock jokes"
                              />
                              <Node
                                top={280}
                                left={col * 4}
                                parent={parent4Ref}
                                width={66}
                                dashed
                              />
                              <Node
                                top={255}
                                left={col * 4}
                                parent={parent4Ref}
                                label="charade"
                              />
                            </>
                          )}
                        </Node>
                        <Node
                          top={205}
                          left={col * 3}
                          parent={parent3Ref}
                          width={81}
                        />
                        <Node
                          top={230}
                          left={col * 3}
                          parent={parent3Ref}
                          width={66}
                        />
                      </>
                    )}
                  </Node>
                  <Node
                    top={290}
                    left={col * 2}
                    parent={parent2Ref}
                    width={83}
                  />
                  <Node
                    top={315}
                    left={col * 2}
                    parent={parent2Ref}
                    width={97}
                  />
                  <Node
                    top={340}
                    left={col * 2}
                    parent={parent2Ref}
                    width={66}
                  />

                  <Node
                    top={430}
                    left={col * 2}
                    parent={parent2Ref}
                    width={132}
                  />
                  <Node
                    top={455}
                    left={col * 2}
                    parent={parent2Ref}
                    width={83}
                  />
                  <Node
                    top={505}
                    left={col * 2}
                    parent={parent2Ref}
                    width={66}
                    dashed
                  />
                  <Node
                    top={480}
                    left={col * 2}
                    parent={parent2Ref}
                    width={117}
                  />
                </>
              )}
            </Node>

            <Node top={430} left={col} parent={parent1Ref} width={96} />
            <Node top={455} left={col} parent={parent1Ref} width={77} />
            <Node top={480} left={col} parent={parent1Ref} width={84} />
            <Node top={505} left={col} parent={parent1Ref} width={104} />
          </>
        )}
      </Node>
    </div>
  );
};

export default TaxonomyTree;
