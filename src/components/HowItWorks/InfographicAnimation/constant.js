const taxonomy_0 = '/assets/taxonomy/layer_0.svg';
const taxonomy_0_1 = '/assets/taxonomy/layer_0_1.svg';
const taxonomy_1 = '/assets/taxonomy/layer_1.svg';
const taxonomy_1_1 = '/assets/taxonomy/layer_1_1.svg';
const taxonomy_2 = '/assets/taxonomy/layer_2.svg';
const taxonomy_2_0 = '/assets/taxonomy/layer_2_0.svg';
const taxonomy_3 = '/assets/taxonomy/layer_3.svg';
const taxonomy_3_0 = '/assets/taxonomy/layer_3_0.svg';

const detectGap_0 = '/assets/detect-gap/layer_0.svg';
const detectGap_1 = '/assets/detect-gap/layer_1.svg';
const detectGap_2 = '/assets/detect-gap/layer_2.svg';
const detectGap_4 = '/assets/detect-gap/layer_4.svg';
const detectGap_5 = '/assets/detect-gap/layer_5.svg';
const detectGap_6 = '/assets/detect-gap/layer_6.svg';

const blockRed = '/assets/fine-tune/block_red.svg';
const blockViolet = '/assets/fine-tune/block_v.svg';

const modelStack_0 = '/assets/model-stack/layer_0.svg';
const modelStack_1 = '/assets/model-stack/layer_1.svg';
const modelStack_2 = '/assets/model-stack/layer_2.svg';

import styles from './InfographicAnimation.module.scss';

export const infographicList = {
  taxonomy: {
    originalWidth: 512,
    ratio: 1.459,
    layers: [
      {
        img: taxonomy_0,
        size: 14.65,
        delay: 800,
        animation: [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
      },
      {
        img: taxonomy_0_1,
        size: 7.87,
        delay: 600,
        pos: [67.33, 53.5],
        animation: [
          {
            opacity: 0,
            left: 73,
          },
          {
            opacity: 1,
            left: 67.33,
          },
        ],
      },
      {
        img: taxonomy_1,
        size: 20.35,
        delay: 400,
        pos: [99, 65.5],
        animation: [
          {
            opacity: 0,
            left: 106,
          },
          {
            opacity: 1,
            left: 99,
          },
        ],
      },
      {
        img: taxonomy_1,
        size: 20.35,
        delay: 400,
        pos: [99, 104.5],
        animation: [
          {
            opacity: 0,
            left: 106,
          },
          {
            opacity: 1,
            left: 99,
          },
        ],
      },
      {
        img: taxonomy_1,
        size: 20.35,
        delay: 400,
        pos: [99, 143.5],
        animation: [
          {
            opacity: 0,
            left: 106,
          },
          {
            opacity: 1,
            left: 99,
          },
        ],
      },
      {
        img: taxonomy_1_1,
        size: 8.26,
        delay: 200,
        pos: [200, 141.92],
        animation: [
          {
            opacity: 0,
            left: 207,
          },
          {
            opacity: 1,
            left: 200,
          },
        ],
      },
      {
        img: detectGap_1,
        size: 12.19,
        pos: [219, 172.5],
      },
      {
        img: taxonomy_2_0,
        size: 8.2,
        delay: 200,
        pos: [267, 180.44],
        animation: [
          {
            opacity: 0,
            left: 260,
          },
          {
            opacity: 1,
            left: 267,
          },
        ],
      },
      {
        img: taxonomy_2,
        size: 20.35,
        delay: 400,
        pos: [306.26, 179.5],
        animation: [
          {
            opacity: 0,
            left: 299.26,
          },
          {
            opacity: 1,
            left: 306.26,
          },
        ],
      },
      {
        img: taxonomy_2,
        size: 20.35,
        delay: 400,
        pos: [306.26, 218.14],
        animation: [
          {
            opacity: 0,
            left: 299.26,
          },
          {
            opacity: 1,
            left: 306.26,
          },
        ],
      },
      {
        img: taxonomy_2,
        size: 20.35,
        delay: 400,
        pos: [306.26, 256.5],
        animation: [
          {
            opacity: 0,
            left: 299.26,
          },
          {
            opacity: 1,
            left: 306.26,
          },
        ],
      },
      {
        img: taxonomy_3_0,
        size: 5.77,
        delay: 600,
        pos: [408.23, 228.25],
        animation: [
          {
            opacity: 0,
            left: 401.23,
          },
          {
            opacity: 1,
            left: 408.23,
          },
        ],
      },
      {
        img: taxonomy_3,
        size: 15,
        delay: 800,
        pos: [435, 227],
        animation: [
          {
            opacity: 0,
            left: 428,
          },
          {
            opacity: 1,
            left: 435,
          },
        ],
      },
    ],
  },
  'synthetic-data': {
    originalWidth: 346,
    ratio: 0.795,
    layers: [
      {
        img: taxonomy_1,
        delay: 200,
        size: 30.12,
        pos: [43.5, 135],
        animation: [
          {
            left: 22.5,
            top: 107,
          },
          {
            left: 43.5,
            top: 135,
          },
        ],
      },
      {
        img: taxonomy_1,
        size: 30.12,
        pos: [22.5, 147.5],
      },
      {
        img: taxonomy_1,
        delay: 200,
        size: 30.12,
        pos: [0, 161],
        animation: [
          { left: 22.5, top: 189 },
          {
            left: 0,
            top: 161,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 1000,
        size: 18.78,
        pos: [232, 0],
        animation: [
          { opacity: 0, top: -10 },
          {
            opacity: 0.5,
            top: 0,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 900,
        size: 18.78,
        pos: [177, 32],
        animation: [
          { opacity: 0, top: 22 },
          {
            opacity: 0.7,
            top: 32,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 800,
        size: 18.78,
        pos: [122, 63],
        animation: [
          { opacity: 0, top: 53 },
          {
            opacity: 1,
            top: 63,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 950,
        size: 18.78,
        pos: [237, 55],
        animation: [
          { opacity: 0, top: 45 },
          {
            opacity: 0.5,
            top: 55,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 850,
        size: 18.78,
        pos: [182, 87],
        animation: [
          { opacity: 0, top: 77 },
          {
            opacity: 0.7,
            top: 87,
          },
        ],
      },
      {
        img: blockViolet,
        delay: 750,
        size: 18.78,
        pos: [105, 105],
        animation: [
          { opacity: 0, top: 95 },
          {
            opacity: 1,
            top: 105,
          },
        ],
      },
      {
        img: taxonomy_2,
        delay: 300,
        size: 30.12,
        pos: [87.7, 292],
        animation: [
          {
            left: 67,
            top: 264,
          },
          {
            left: 87.7,
            top: 292,
          },
        ],
      },
      {
        img: taxonomy_2,
        size: 30.12,
        pos: [67, 304],
      },
      {
        img: taxonomy_2,
        delay: 300,
        size: 30.12,
        pos: [44, 317],
        animation: [
          { left: 67, top: 344 },
          {
            left: 44,
            top: 317,
          },
        ],
      },
      {
        img: blockRed,
        delay: 650,
        size: 18.78,
        pos: [276, 155],
        animation: [
          { opacity: 0, top: 145 },
          {
            opacity: 0.5,
            top: 155,
          },
        ],
      },
      {
        img: blockRed,
        delay: 550,
        size: 18.78,
        pos: [221, 187],
        animation: [
          { opacity: 0, top: 177 },
          {
            opacity: 0.7,
            top: 187,
          },
        ],
      },
      {
        img: blockRed,
        delay: 450,
        size: 18.78,
        pos: [166, 218],
        animation: [
          { opacity: 0, top: 208 },
          {
            opacity: 1,
            top: 218,
          },
        ],
      },
      {
        img: blockRed,
        delay: 600,
        size: 18.78,
        pos: [281, 210],
        animation: [
          { opacity: 0, top: 200 },
          {
            opacity: 0.5,
            top: 210,
          },
        ],
      },
      {
        img: blockRed,
        delay: 500,
        size: 18.78,
        pos: [226, 242],
        animation: [
          { opacity: 0, top: 232 },
          {
            opacity: 0.7,
            top: 242,
          },
        ],
      },
      {
        img: blockRed,
        delay: 400,
        size: 18.78,
        pos: [149, 260],
        animation: [
          { opacity: 0, top: 250 },
          {
            opacity: 1,
            top: 260,
          },
        ],
      },
    ],
  },
  'detect-gap': {
    originalWidth: 246,
    ratio: 0.697,
    layers: [
      {
        img: detectGap_4,
        size: 26.174,
        delay: 200,
        pos: [24, 150],
        animation: [
          {
            top: 150,
          },
          {
            top: 191,
          },
        ],
      },
      {
        img: detectGap_0,
      },
      {
        img: detectGap_1,
        size: 26.174,
        delay: 400,
        pos: [123, 54],
        animation: [
          {
            top: 54,
          },
          {
            top: 1,
          },
        ],
      },
      {
        img: detectGap_2,
      },
      {
        img: detectGap_1,
        size: 26.174,
        delay: 450,
        pos: [124, 169.5],
        animation: [
          {
            top: 169.5,
          },
          {
            top: 210.63,
          },
        ],
      },
      {
        img: detectGap_5,
      },
      {
        img: detectGap_6,
      },
      {
        img: detectGap_1,
        size: 26.174,
        delay: 300,
        pos: [90, 110],
        animation: [
          {
            top: 110,
          },
          {
            top: 56.64,
          },
        ],
      },
    ],
  },
  'fine-tune': {
    originalWidth: 246,
    ratio: 0.697,
    layers: [
      {
        img: blockViolet,
        size: 26.42,
        delay: 200,
        pos: [24, 191],
        animation: [
          {
            top: 191,
          },
          {
            top: 149,
          },
        ],
      },
      {
        img: detectGap_0,
      },
      {
        img: blockViolet,
        size: 26.42,
        delay: 300,
        pos: [123, 0],
        animation: [
          {
            top: 0,
          },
          {
            top: 53,
          },
        ],
      },
      {
        img: detectGap_2,
      },
      {
        img: blockRed,
        size: 26.42,
        delay: 300,
        pos: [124, 210.63],
        animation: [
          {
            top: 210.63,
          },
          {
            top: 167,
          },
        ],
      },
      {
        img: detectGap_5,
      },
      {
        img: detectGap_6,
      },
      {
        img: blockRed,
        size: 26.42,
        delay: 250,
        pos: [90, 56.64],
        animation: [
          {
            top: 56.64,
          },
          {
            top: 110,
          },
        ],
      },
    ],
  },
  'model-stack': {
    originalWidth: 295,
    ratio: 0.712,
    layers: [
      {
        img: modelStack_0,
      },
      {
        img: modelStack_1,
        delay: 400,
        pos: [0, 50],
        animation: [
          {
            top: 50,
          },
          {
            top: 100,
          },
        ],
      },
      {
        img: modelStack_2,
        delay: 800,
        pos: [0, 0],
        animation: [
          {
            top: 0,
            opacity: 0,
          },
          {
            top: 69,
          },
          {
            top: 69,
          },
        ],
      },
    ],
  },
};
