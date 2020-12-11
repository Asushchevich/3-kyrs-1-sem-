function () {
date = new Date();
currHours = date.getHours();

var schedule = "Сейчас время "

switch (true) {
	case (currHours == 7):
		schedule+= "завтрака"; break;
	case (22 < currHours && currHours < 7):
		if (date.getMinutes() < 31){schedule+="сна"} break;
	case (8 < currHours && currHours < 19):
		if (currHours == 13) {schedule+="обеда и "} schedule+="работы"; break;
	case (17 < currHours && currHours < 24): 
		if (currHours == 19){schedule+="ужина и "} schedule+="отдыха"; break;
	default: schedule+="подъёма";
}


alert(schedule)
}
