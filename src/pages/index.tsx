import Head from 'next/head';
import PageShell from '../components/PageShell/PageShell';
import Leadspace from '../components/Leadspace/Leadspace';

import styles from '../styles/main.module.scss';

export default function Home() {
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
          <Leadspace />
        </PageShell>
      </main>
    </>
  );
}
