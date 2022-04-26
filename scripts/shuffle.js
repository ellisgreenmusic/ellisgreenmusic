function shuffle(arr) {
	for(let i = arr.length - 1; i > 0; i--) {
		//durstenfeld shuffle
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}