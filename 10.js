var rangeTo = 10;

var primeList = []
var primeFlag= true;

for (var i = 2; i <=rangeTo; i++) {
	primeFlag = true;
	for (var j = 2; j < i; j++){
		if (i % j == 0) {
			primeFlag = false;
		}
	}
	if (primeFlag) {
		primeList.push(i);
	}
}

alert(primeList)
