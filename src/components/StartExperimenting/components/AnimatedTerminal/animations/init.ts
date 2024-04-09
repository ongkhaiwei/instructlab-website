import wait from './wait';

const init: object[] = [
  {
    text: 'ilab init',
    cmd: true,
    delay: 40,
  },
  {
    cmd: false,
    ...wait(
      10,
      (i, arr) => ({
        text: `Welcome to InstructLab CLI. This guide will help you set up your environment.
Please provide the following values to initiate the environment [press Enter for defaults]:
Path to taxonomy repo [taxonomy]: ${arr.slice(0, i + 1).join('')}`,
        delay: 40,
      }),
      'taxonomy',
    ),
  },
  {
    cmd: false,
    ...wait(10, i => ({
      text: `\`taxonomy\` seems to not exists or is empty. Should I clone git@github.com:instruct-lab/taxonomy.git for you? [y/N]: ${i < 9 ? '' : 'y'}`,
      delay: 40,
    })),
  },
  {
    cmd: false,
    ...wait(10, () => ({
      text: `Cloning git@github.com:instruct-lab/taxonomy.git...`,
    })),
  },
  {
    cmd: false,
    ...wait(5, () => ({
      text: 'Generating `config.yaml` in the current directory...',
    })),
  },
  {
    text: "Initialization completed successfully, you're ready to start using `ilab`. Enjoy!",
    cmd: false,
  },
  {
    text: '',
    cmd: true,
  },
];

export default init;
