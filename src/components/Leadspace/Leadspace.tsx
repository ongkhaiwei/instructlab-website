import { Column, Button, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Logo from './graphics/Logo';
import styles from './Leadspace.module.scss';

const Leadspace = () => (
  <section className={styles.pane}>
    <Grid>
      <Column
        className={styles.content}
        xlg={{ span: 6, offset: 1 }}
        lg={{ span: 6 }}
        md={{ span: 3 }}
        sm={{ span: 4 }}
      >
        <h1 className={styles.content__header}>InstructLab Hackathon</h1>
        <p className={styles.content__subhead}>Under Construction</p>
        <Button href="https://instructlab.io" className={styles.action}>
          <span>InstructLab official website</span> <ArrowRight />
        </Button>
      </Column>
      <Column
        className={styles.graphicsWrapper}
        xlg={{ span: 8, offset: 7 }}
        lg={{ span: 10, offset: 6 }}
        md={{ span: 4, offset: 4 }}
      >
        <div className={styles.graphics}>
          <Logo />
        </div>
      </Column>
    </Grid>
  </section>
);

export default Leadspace;
