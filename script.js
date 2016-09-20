//mayank singh
function submitAnswers(){
	var total=5; //total questions
	var score=0;  
	
	//get the user input  5 questions
	var q1=document.forms["quizForm"]["q1"].value;
	var q2=document.forms["quizForm"]["q2"].value;
	var q3=document.forms["quizForm"]["q3"].value;
	var q4=document.forms["quizForm"]["q4"].value;
	var q5=document.forms["quizForm"]["q5"].value;
	

	
	for(i=1;i <=total;i++){	
	//validation
		if(eval('q'+i) == null || eval('q'+i) =='' ){
			alert('you missed question '+i);
			return false;
		}	
	}
	
		
	//set correct answers
	var answers=["b","a","d","b","d"];
	

	//check answers
		for(i=1;i <=total;i++){	
			if(eval('q'+i)==answers[i-1]){  // question array index o then q2 index 1 soo on....
		score++;
	}
		}
		
	//if(q1==answers[0]){
	//	score++;
	//}
	
	//display results
	var results=document.getElementById('results');
	results.innerHTML="<h3>You Scored  <span>"+score+" </span> out of <span>"+total+"<span><h3>";
	
	
	
	alert('you scored  '+ score +' out of  '+ total);
	return false;	
}