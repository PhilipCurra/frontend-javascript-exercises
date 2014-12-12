module.exports.addItem = function(obj, arr) {
	var check = "check";
	for(i=0; i<arr.length; i++) {
		if(arr[i]===obj){
			check = "got it";
		}
	}
	if(check == "got it") {
		return(arr);
	}
	else {
		arr.push(obj);
		return(arr);
	}
};

module.exports.reverseSortedList = function(arr) {
	arr.sort();	
	return(arr.reverse());
}
