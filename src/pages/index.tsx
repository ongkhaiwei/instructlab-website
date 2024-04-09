import Head from 'next/head';
import PageShell from '../components/PageShell/PageShell';
import Leadspace from '../components/Leadspace/Leadspace';
import { useCallback } from 'react';
import ReleaseCycle from '../components/ReleaseCycle/ReleaseCycle';
import HowItWorks from '../components/HowItWorks/Slideshow';
import StartExperimenting from '../components/StartExperimenting/StartExperimenting';
import Taxonomy from '../components/Taxonomy/Taxonomy';

import styles from '../styles/main.module.scss';

export default function Home() {
  const handleJoinCommunity = useCallback(() => {
    // TODO
  }, []);

  const handleCheckLatestModel = useCallback(() => {
    // TODO
  }, []);

  const handleStartExperimentingCtaClick = useCallback(() => {
    // TODO
  }, []);

  return (
    <>
      <Head>
        <title>InstructLab</title>
        <meta
          name="description"
          content="InstructLab is an open source project designed to change how LLMs are developed"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageShell>
          <Leadspace
            onJoinCommunity={handleJoinCommunity}
            onCheckLatestModel={handleCheckLatestModel}
          />
          <ReleaseCycle />
          <HowItWorks />
          <Taxonomy />
          <StartExperimenting onCtaClicked={handleStartExperimentingCtaClick} />
        </PageShell>
      </main>
    </>
  );
}
