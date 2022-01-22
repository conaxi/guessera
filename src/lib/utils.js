export function random(max, min) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min)
};

export function splitArrayIntoSub(arr, size) {
	let chunks = [];
	for (let i = 0; i < arr.length; i += size) {
		chunks.push(arr.slice(i, i+size));
	}
	return chunks;
};
