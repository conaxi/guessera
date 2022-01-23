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

export const degToRad = (deg) => {
	return (deg * Math.PI) / 180;
};

export const sphericalToCartesian = (latitude, longitude, radius = 100) => {
	latitude = degToRad(latitude);
	longitude = degToRad(longitude);
	return {
		x: radius * Math.cos(latitude) * Math.cos(longitude),
		y: radius * Math.cos(latitude) * Math.sin(longitude),
		z: radius * Math.sin(latitude)
	};
};
