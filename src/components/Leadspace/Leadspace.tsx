import { FC } from 'react';
import { Column, Button, Grid } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Logo from './graphics/Logo';
import GitHub from '../Icons/github.svg';
import HuggingFace from '../Icons/hf.svg';
import Paper from '../Icons/paper.svg';

import styles from './Leadspace.module.scss';

type LeadspaceProps = {
  onJoinCommunity: () => void;
  onCheckLatestModel: () => void;
  onReadPaper: () => void;
};

const Leadspace: FC<LeadspaceProps> = ({
  onJoinCommunity,
  onCheckLatestModel,
  onReadPaper,
}) => (
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
          An new community-based approach to build truly open-source LLMs
        </p>
        <Button className={styles.action} onClick={onJoinCommunity}>
          <GitHub className={styles.icon} />
          <label>Join the community</label> <ArrowRight />
        </Button>
        <Button className={styles.action} onClick={onCheckLatestModel}>
          <HuggingFace className={styles.icon} />
          <label>Check out the latest model</label>
          <ArrowRight />
        </Button>
        <Button className={styles.action} onClick={onReadPaper}>
          <Paper className={styles.icon} />
          <label>Read the paper</label> <ArrowRight />
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
