// swap two elements in an array.
function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

// reverse an array. supports subindexing.
function reverse(arr, i, j) {
	let k = 0;
	while (i + k < j - k) {
		swap(arr, i + k, j - k);
		k++;
	}
}

// find largest index that satisfies a[k] < a[k + 1].
function findK(arr) {
	let k = -1;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) {
			k = i;
		}
	}
	return k;
}

// find largest index that satisfies a[k] < a[l].
function findL(arr, k) {
	let l = k;
	for (let i = k + 1; i < arr.length; i++) {
		if (arr[k] < arr[i]) {
			l = i;
		}
	}
	return l;
}

function permute(nItems) {
	const permutations = [];
	const array = [...Array(nItems).keys()];

	// k will be >0 while there are still valid permutations remaining.
	let k = findK(array);
	while (k > -1) {
		//output the permutation.
		console.log(array);

		// find the next permutation.
		let l = findL(array, k);
		swap(array, k, l);
		reverse(array, k + 1, array.length - 1);
		k = findK(array);
	}
	//output the permutation.
	console.log(array);
}

function combinations(k, arr, prefix = []) {
	if (prefix.length == 0) arr = [...Array(arr).keys()];
	if (k == 0) return [prefix];
	return arr.flatMap((v, i) =>
		combinations(k - 1, arr.slice(i + 1), [...prefix, v])
	);
}

function arrayUnion(a, b) {
	const list = a.reduce((s, e) => s.concat(e), []);
	console.log(a, b, list);
	return b.some((e) => list.includes(e));
}

function generatePermutations(nTeams, nCourts, nGames) {
	const matches = combinations(2, nTeams);
	const rounds = [];

	console.log(matches);

	const teamCounts = {};
	[...Array(nTeams).keys()].forEach((n) => (teamCounts[n] = 0));

	console.log(teamCounts);

	do {
		let round = [];
		// sort the team counts.

		// select the smallest team.
		// find the first game that doesn't repeat teams this round.
		// add it to the roster.
	} while (rounds.length < nCourts * nGames);

	return rounds;

	while (rounds.length < nGames) {
		const round = [];
		while (round.length < nCourts) {
			let game = matches[0];
			while (arrayUnion(round, game)) {
				matches.push(matches.shift());
				game = matches[0];
			}
			round.push(game);
			matches.shift();
		}
		rounds.push(round);
	}
	return rounds;
}

const a = [[1], [2], [3], [4]];
const b = [3, 4];
const c = [
	[1, 2],
	[3, 4],
];
const d = [5, 6, 7];

/* 
console.log(arrayUnion(a, b));
console.log(arrayUnion(c, b));
console.log(arrayUnion(c, d));
*/

console.log(generatePermutations(6, 2, 4));
