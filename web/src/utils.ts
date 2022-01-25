export interface Cartesian {
  x: number;
  y: number;
  z: number;
}

export const random = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const splitArrayIntoChunks = (
  arr: Array<any>,
  size: number
): Array<any> => {
  let chunks: Array<any> = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const calcPosFromCalcLonRad = (lat: number, lon: number): Cartesian => {
  const phi: number = (90 - lat) * (Math.PI / 180);
  const theta: number = (lon + 180) * (Math.PI / 180);

  return {
    x: -(Math.sin(phi) * Math.cos(theta)),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
};
