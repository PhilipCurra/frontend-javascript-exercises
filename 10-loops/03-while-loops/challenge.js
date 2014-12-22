module.exports.stream = function(conditionalFn, actionFn) {
	var counter = 0;
	var check = conditionalFn();
	while(counter<10 && check) {
		actionFn();
		counter ++;
		check = conditionalFn();
	}
}

module.exports.sumNumbers = function(arr) {
	var retro = 0;
	counter = arr.length;
	while(counter>0) {
		retro += arr[counter-1];
		counter --;
	}
	return(retro);
}

