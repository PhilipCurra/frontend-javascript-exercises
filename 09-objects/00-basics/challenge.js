module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
	return {title: courseTitle, duration: courseDuration, students: courseStudents};
}

module.exports.addProperty = function(object, newProp, newValue) {
	if(!object[newProp]) {
		object[newProp] = newValue;
		return object;
	}
	else {
		return object;
	}
}

module.exports.formLetter = function(letter) {
	return("Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender);
}

module.exports.canIGet = function(item, money) {
	var cat = {'MacBook Air': 999, 'MacBook Pro': 1299, 'Mac Pro': 2499, 'Apple Sticker': 1};
	return(cat[item]<=money);
}