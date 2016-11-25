$(document).ready(function(){
	$('#submit-question').click(submit_question);
});

var number_of_conditions = 5;
var first_load = true;
var last = null; //variable to save last asked question
var last2 = null; //var to save 2nd to last asked question

function submit_question(){
	$('#submit-question').prop('disabled',true);
	var question = $('#question').val();
	var option = 0;

	if(!$('#question').val()){ //if the question is blank
		display_answer("sorry, can not read your mind rn");
	} else if (question == last && question == last2){ //asking repeat questions
		display_answer("DejaVu, ask someting else");
	} else{
		if(question.match(/^is\b/i)) { //if question starts with "is"
			option = Math.floor((Math.random() * 2) + 1); //gives option 1 or 2
			console.log('is')
		} else {
			option = Math.floor((Math.random() * number_of_conditions) + 3); // gives option a value of 3-7
		}
		show_answer(option);
	}
	last2 = last;
	last = question;
}

function display_answer(answer){

	$('#msg-txt').fadeOut(500,function(){
		$('#msg-txt').html(answer);
		$('#msg-txt').fadeIn(500);
		$('submit-question').prop('disabled',false);
	});
	if(first_load){
		$('.msg').fadeIn(300,function(){
			first_load = false;
		});
	}
}

function show_answer(option){

	var answer;
	switch(option){
		case 1:
			answer = "Yep!";
			break;
		case 2:
			answer = "Nope!";
			break;
		case 3:
			answer = "Nap on it";
			break;
		case 4:
			answer = "Ask a Human";
			break;
		case 5:
			answer = "Good as Gold";
			break;
		case 6:
			answer = "Hold on tight";
			break;
		case 7: 
			answer = "Bold move";
		default:
			answer = "Are you the Borg?";
			break;
	}
	display_answer(answer);

}


/*
	There are several different ways to check for repeats and 'is' questions.
	Here we store the last two questions in variables, but you could use arrays to store all the asked questions and check against that.
	We use regular expressions to check if the question begins with 'is', but String methods like String.charAt(0) could accomplish the same thing.
	*/