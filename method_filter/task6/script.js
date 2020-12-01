let arr = [1, 2, [3, 4], 5, [6, 7]];

let positive = arr.filter(function(index){
	return (typeof index) == "number";
});

console.log(positive);

