let arr = ["25", "100", "97","48", "36"];

let sqrt_arr = arr.map(function(int){
	return int.split('').reverse().join("");
	});

console.log(sqrt_arr);

