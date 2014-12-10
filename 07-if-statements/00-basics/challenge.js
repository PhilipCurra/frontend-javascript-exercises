module.exports.favoriteNumber = function(fNum, guess) {
	if(guess > fNum) {
		return("Too high");
	}
	else if(guess < fNum) {
		return("Too low");
	}
	else {
		return("You got it!");
	}
}

module.exports.checkLock = function(n1, n2, n3, n4) {
	if((n1==3 || n1==5 || n1==7) && n2==2 && (5<=n3 && n3<=100) && (n4<9 || n4>20)) {
		return("correct");
	}
	else {
		return("incorrect");
	}
}

module.exports.canIGet = function(item, money) {
	if(item=='MacBook Air' && money>=999 || item=='MacBook Pro' && money>=1299 || item=='Mac Pro' && money>=2499 || item=='Apple Sticker' && money>=1) {
		return(true);
	}
	else {
		return(false);
	}
}