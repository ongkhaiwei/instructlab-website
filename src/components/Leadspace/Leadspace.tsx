import { FC } from 'react';
import { Button, Column, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Cube from './graphics/Cube';

import styles from './Leadspace.module.scss';

type LeadspaceProps = {
  onCtaClicked: () => void;
};

const Leadspace: FC<LeadspaceProps> = ({ onCtaClicked }) => (
  <section className={styles.pane}>
    <Grid>
      <Column
        className={styles.content}
        xlg={{ span: 6, offset: 1 }}
        lg={{ span: 6 }}
        md={{ span: 3 }}
        sm={{ span: 4 }}
      >
        <h1 className={styles.content__header}>InstructLab</h1>
        <p className={styles.content__subhead}>
          InstructLab is an open source project designed to change how LLMs are
          developed
        </p>
        <Button className={styles.action} onClick={onCtaClicked}>
          <label>Join the community</label> <ArrowRight />
        </Button>
      </Column>
      <Column
        className={styles.graphicsWrapper}
        xlg={{ span: 8, offset: 7 }}
        lg={{ span: 10, offset: 6 }}
        md={{ span: 4, offset: 4 }}
      >
        <div className={styles.graphics}>
          <Cube />
        </div>
      </Column>
    </Grid>
  </section>
);

export default Leadspace;
