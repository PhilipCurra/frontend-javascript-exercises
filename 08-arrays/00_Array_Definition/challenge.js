module.exports.newArray = function(v1, v2, v3, v4) {
	return([v1,v2,v3,v4]);
}

module.exports.firstAndLast = function(arr) {
	return([arr.shift(),arr.pop()]);
}