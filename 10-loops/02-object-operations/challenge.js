module.exports.copy = function(obj) {
	var retObj = {};
	for(property in obj) {
		/* compare obj[prop] and obj["prop"]
		   this is not available in = {prop: obj[prop]} */
		retObj[property] = obj[property];
	}
	return(retObj);
}

module.exports.extend = function(dest, src) {
	for(property in src) {
		dest[property] = src[property];
	}
	return(dest);
}

module.exports.hasElems = function(obj, arr) {
	var ans = true;
	var temp = 'gonna get it?';
	for(i=0; i<arr.length; i++) {
		for(property in obj){
			if(arr[i]===property) {
				temp = 'got it';
			}
		}
		if(temp!=='got it') {
			ans = false;
		}
		temp = "gonna get it?";
	}
	return(ans);
}