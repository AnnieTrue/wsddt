var unusedAnswers = [
	"Tell Annie a joke.",
	"Spend hours drawing Annie's face from her old facebook profile pic.",
	"Plan a picnic to take Annie on, but let her know in advance so she can plan an outfit.",
	"Consider getting a mattress that doesn't feel like sludge to Annie.",
	"Send Annie your favortie picture of her.",
	"Get a fun, new puzzle to do with Annie.",
	"Tell Annie a cool fact you know.",
	"Remember to jot down what was said when Annie comes up in conversation so you can tell her about it later.",
	"Write Annie a letter.",
	"Send a pretty item to Bugleweed of SLUGisle.",
	"Give Annie a compliment.",
	"Learn a vegetarian recipe that Annie would like.",
	"Plan and create an indepth, narrative-driven escape room to surprise Annie with.",
	"Tell Annie you love RPGs.",
	"Tell Annie a secret.",
	"Buy Annie a present."

];
var usedAnswers = [];
var answersCount = unusedAnswers.length;
var firstClick = true;

function tellMe(){

	if(firstClick){
		document.getElementById("button").innerHTML="what else?";
		firstClick = false;
	}

	if (unusedAnswers.length==0){//if every answer has been used
		while (usedAnswers.length>0){
			unusedAnswers.push(usedAnswers.pop());
		}
		console.log("reset");
	}
	var showThis =Math.floor(Math.random()*unusedAnswers.length);
	var hideThese = [];
  	document.getElementById("answer").innerHTML=unusedAnswers[showThis];
	usedAnswers.push(unusedAnswers[showThis]);
	unusedAnswers.splice(showThis, 1);


}