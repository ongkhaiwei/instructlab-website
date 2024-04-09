import wait from './wait';

const serve: object[] = [
  {
    text: 'ilab serve',
    cmd: true,
    delay: 40,
  },
  {
    cmd: false,
    ...wait(10, () => ({
      text: `INFO 2024-03-02 02:21:11,352 lab.py:201 Using model 'models/ggml-merlinite-7b-0302-Q4_K_M.gguf' \
with -1 gpu-layers and 4096 max context size.`,
    })),
  },
  {
    cmd: false,
    ...wait(10, () => ({
      text: `Starting server process
After application startup complete see http://127.0.0.1:8000/docs for API.`,
    })),
  },
  {
    cmd: false,
    ...wait(10, () => ({
      text: 'Press CTRL+C to shut down the server.\n',
    })),
  },
];

export default serve;
