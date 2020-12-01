let arr = [ 1, -3, 2, 4, -6, 4, 6, -8, 6, -5 ];

let positive = arr.filter(function(index){
	return index < 0;
});

console.log(positive.length);
