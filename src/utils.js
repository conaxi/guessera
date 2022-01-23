export const random = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const splitArrayIntoChunks = (arr, size) => {
	let chunks = [];
	for (let i = 0; i < arr.length; i += size) {
		chunks.push(arr.slice(i, i + size));
	}
	return chunks;
};

export const sphericalToCartesian = (phi, theta) => {
	return {
		x: -(Math.sin(phi) * Math.cos(theta)),
		y: Math.sin(phi) * Math.sin(theta),
		z: Math.cos(phi)
	};
};
