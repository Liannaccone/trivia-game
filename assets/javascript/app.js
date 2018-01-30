

$(document).ready(function() {


// VARIABLES

	// array of questions
	var questionsArr = [
		
		// question 1; index[0]
		{
			question: "do you like cats",
			possibleAnswers: ["yes", "maybe", "no", "absolutely not"],
			correctAnswer: "absolutely not",
			correctImage: "http://via.placeholder.com/200x200",
		},

		// question 2; index[1]
		{
			question: "do you like dogs?",
			possibleAnswers: ["yes", "maybe", "no", "absolutely not"],
			correctAnswer: "yes",
			correctImage: "http://via.placeholder.com/200x200",
		},

		// question 3; index[2]
		{
			question: "",
			possibleAnswers: [],	
			correctAnswer: "monkey",
			correctImage: "http://via.placeholder.com/200x200",
		}

	] //closing out questionsArr




	// count will keep track of the index of the currently displaying question
	var count = 0


	//  variables to keep track of use responses
	var correctCount = 0
	var wrongCount = 0
	var unansweredCount = 0

	// variable to store user answer
	var userAnswer = ""




//  FUNCTIONS
//  ====================




	// populates fields with the first question
	function showQuestion() {
		$("#question").html(questionsArr[count].question)
		$("#answers").html("<li>" + questionsArr[count].possibleAnswers[0] + 
			"</li><li>" + questionsArr[count].possibleAnswers[1] + 
			"</li><li>" + questionsArr[count].possibleAnswers[2] + 
			"</li><li>" + questionsArr[count].possibleAnswers[3] + 
			"</li>");
	};


	// if user answers correct, increments counts and populates next question
	function rightAnswer() {
		$("#question").empty();
		$("#answers").empty();
		$("#response").append("<div>Correct!</div><div><img src=" + questionArr[count].correctImage + "></div>");
	 	correctCount++
	 	count++
	 	$("#question").html(questionsArr[count].question)
	 	$("#answers").html("<li>" + questionsArr[count].possibleAnswers[0] + 
	 		"</li><li>" + questionsArr[count].possibleAnswers[1] + 
	 		"</li><li>" + questionsArr[count].possibleAnswers[2] + 
	 		"</li><li>" + questionsArr[count].possibleAnswers[3] + 
			"</li>");
	 }

	// if use answer is wrong, increments counts and populates next question
	function wrongAnswer() {
		$("#question").empty();
		$("#answers").empty();
		$("#response").append("<div>Wrong!</div><div>The correct answer is " + questionsArr[count].correctAnswer + "</div><div><img src=" + questionsArr[count].correctImage + "></div>");
		wrongCount++
		count++
		$("#question").html(questionsArr[count].question)
		$("#answers").html("<li>" + questionsArr[count].possibleAnswers[0] + 
			"</li><li>" + questionsArr[count].possibleAnswers[1] + 
			"</li><li>" + questionsArr[count].possibleAnswers[2] + 
			"</li><li>" + questionsArr[count].possibleAnswers[3] + 
			"</li>");
	}

	// if timer runs out before user answers, increments counts and populates next question
	function noAnswer() {
		unansweredCount++
		count++
		$("#question").html(questionsArr[count].question)
		$("#answers").html("<li>" + questionsArr[count].possibleAnswers[0] + 
			"</li><li>" + questionsArr[count].possibleAnswers[1] + 
			"</li><li>" + questionsArr[count].possibleAnswers[2] + 
			"</li><li>" + questionsArr[count].possibleAnswers[3] + 
			"</li>");
	}




// Main Process
// ======================


// on user click of start button, remove start button and show question

	$("#startButton").on("click",function(event) {
		$(this).remove();
		showQuestion();
	});

	// for (var i = 0; i <= 0 ; i++) {
	
		$("#answers").on("click",function(event){
			userAnswer = $(this).val()
				if(userAnswer == questionsArr[count].correctAnswer) {
					rightAnswer();
				}
				if (userAnswer !== questionsArr[count].correctAnswer) {
					wrongAnswer();
				}	



		});
	// };




}); // closing out document ready