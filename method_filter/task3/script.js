let arr = [ 1, -3, 2, 4, -6, 4, 6, -8, 6, -5 ];

let positive = arr.filter(function(index){
	return index > 0 && index < 10;
});

console.log(positive);

