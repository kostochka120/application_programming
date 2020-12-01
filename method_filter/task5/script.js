let arr = [ 1, -3, 2, 4, -6, 4, 6, -8, 6, -5 ], mul = 0 ;

let positive = arr.filter(function(index){
	mul += 1;
	return index * mul < 30;
});

console.log(positive);

