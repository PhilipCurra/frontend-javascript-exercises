module.exports.getKeys = function(obj) {
	var arr =[];
	var i = 0;
	for(var property in obj) {
		arr[i] = property;
		i += 1;
	}
	return(arr);
}

module.exports.getValues = function(obj) {
	var arr =[];
	var i =0;
	for(var property in obj) {
		arr[i] = obj[property];
		i += 1;
	}
	return(arr);
}

module.exports.objectToArray = function(obj) {
	var arr =[];
	var i =0;
	for(var property in obj) {
		arr[i] = (property + " is " + obj[property]);
		i += 1;
	}
	return(arr);
}