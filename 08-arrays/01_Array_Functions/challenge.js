module.exports.reversePlusOne = function(arr) {
	arr.push(1);
	return(arr.reverse());
}

module.exports.plusesEverywhere = function(arr) {
	return(arr.join([separator='+']));
}

/*module.exports.plusesEverywhere = function(arr) {
	temp = arr.shift();
	for(i=1; i<arr.length+i; i++) {
		temp = temp + "+" + arr.shift();
	};
	return(temp);
};*/

module.exports.arrayQuantityPlusOne = function(arr) {
	return(arr.length+1);	
}