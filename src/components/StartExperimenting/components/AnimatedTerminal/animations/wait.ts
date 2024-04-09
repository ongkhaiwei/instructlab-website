const wait = (
  length: number,
  callback: (i: number, arr: Array<string | null>) => object,
  typeText: string = '',
) => ({
  frames: [...new Array(length).fill(null), ...Array.from(typeText)].map(
    (_, i, arr) => callback(i, arr),
  ),
});

export default wait;
