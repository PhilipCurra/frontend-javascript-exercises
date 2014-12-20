module.exports.sumNumbers = function(arr) {
	var temp = 0;
	for(i = 0; i < arr.length; i++) {
		temp += arr[i];
	}
	return temp;
}

module.exports.splitAndLowerCaseString = function(inputString) {
	return(inputString.toLowerCase().split(","));
}

module.exports.addIndex = function(arr) {
	var retro = [];
	for(i=0; i<arr.length; i++) {
		retro[i] = i + " is " + arr[i];
	}
	return(retro);
}
