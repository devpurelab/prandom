function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function random(max_random) {

	if (max_random < 0) return;

	random_area.innerHTML = words[Math.floor(Math.random() * words.length)];

	setTimeout(function () {
		random(--max_random);
	}, 1000 / 25);
}

words = shuffle(words);
const random_area = document.getElementById("random-area")
let max_random = getRandomInt(50, 100)

random(--max_random)