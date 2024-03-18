'use client';

import { FC } from 'react';
import { Button, Column, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import MatrixAnimation from './graphics/MatrixAnimation';

import styles from './StartExperimenting.module.scss';

export const headerAnimations = {
  text: {
    initial: {
      opacity: 0,
      top: 20,
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        top: {
          duration: 1,
          ease: 'easeOut',
        },
        opacity: {
          delay: 0.3,
          duration: 1,
        },
      },
    },
  },

  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.1 } },
  },
};

type StartExperimentingProps = {
  onCtaClicked: () => void;
};

const StartExperimenting: FC<StartExperimentingProps> = ({ onCtaClicked }) => (
  <section className={styles.pane}>
    <Grid className={styles.grid}>
      <Column
        className={styles.graphics}
        lg={{ span: 6 }}
        md={{ span: 4 }}
        sm={{ span: 2 }}
      >
        <MatrixAnimation />
      </Column>
      <Column
        className={styles.content}
        lg={{ span: 7, offset: 8 }}
        md={{ span: 4, offset: 4 }}
        sm={{ span: 4 }}
      >
        <h2 className={styles.content__header}>Join the community</h2>
        <p className={styles.content__subhead}>
          Downloading the CLI and experimenting with new skills and knowledge is
          a great way to get involved. You can also contribute synthetic data
          directly.
        </p>
        <Button className={styles.action} onClick={onCtaClicked}>
          <label>Join</label> <ArrowRight />
        </Button>
      </Column>
    </Grid>
    <footer>
      <Grid className={styles.footerGrid}>
        <Column className={styles.content} lg={16} md={8} sm={4}>
          {/* Footer */}
        </Column>
      </Grid>
    </footer>
  </section>
);

export default StartExperimenting;
