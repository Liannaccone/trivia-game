

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
			question: "do you like turtles",
			possibleAnswers: ["no","yes","maybe","monkey"],	
			correctAnswer: "monkey",
			correctImage: "http://via.placeholder.com/200x200",
		}

	] //closing out questionsArr




	// count will keep track of the index of the currently displaying question
	var count = 0;

	// questionInt will hold the setInterval when we start the trivia game
	var questionInt;

	// setting question start equal to 10 (seconds)
	var questionStart = 11


	//  variables to keep track of use responses
	var correctCount = 0;
	var incorrectCount = 0;
	var unansweredCount = 0;

	// variable to store user answer
	var userAnswer = "";





//  FUNCTIONS
//  ====================

	



	// populates fields with the first question
	function showQuestion() {
		$("#response").empty();
	// for (var i = 0; i < questionsArr.length; i++) {
		$("#question").html(questionsArr[count].question)
		for (var i = 0; i < questionsArr[count].possibleAnswers.length; i++) {
			$("#answers").append("<div><button data-name='"+ questionsArr[count].possibleAnswers[i]+"'>" + questionsArr[count].possibleAnswers[i] + "</button></div>");
		};
	};




	// };


	// // if user answers correct, increments counts and populates next question
	// function rightAnswer() {
	// 	$("#response").append("<div>Correct!</div><div><img src=" + questionArr[count].correctImage + "></div>");
	//  	correctCount++;
	//  	count++;
	//  	setTimeout(showQuestion(), 1000 * 3);
	//  };

	// // if use answer is wrong, increments counts and populates next question
	// function wrongAnswer() {
	// 	$("#question").empty();
	// 	$("#answers").empty();
	// 	$("#response").append("<div>Wrong!</div><div>The correct answer is " + questionsArr[count].correctAnswer + "</div><div><img src=" + questionsArr[count].correctImage + "></div>");
	// 	wrongCount++;
	// 	count++;
	// 	setTimeout(showQuestion(), 1000 * 3);
	// }

	// if timer runs out before user answers, increments counts and populates next question
	// function noAnswer() {
	// 	unansweredCount++;
	// 	count++;
	// 	$("#questions").empty();
	// 	$("#answers").empty();
	// 	setTimeout(showQuestion(), 1000 * 3);
	// }

	function startTimer() {
		clearInterval(questionInt)
		questionInt = setInterval(decrement, 1000)
	}

	function decrement() {
		// decrease the questionStartby one
		questionStart--;

		// show the number in the #timer tag
		$("#timeLeft").html("Time Remaining: " + questionStart);

		// once the questionStart hits zero...
		if(questionStart === 0 ) {

			// run the stop function
			stop();

			// replace the #game div showing the user's score
			$("#game").html("<h2> All done, here's how you did:</h2><div>Correct Answers: " + correctCount + "</div><div> Incorrect Answers: " + incorrectCount + "</div><div>Unanswered: " + unansweredCount + "</div>")


		}
	}

	// timer stop function
	function stop() {
		clearInterval(questionStart);
	}


// Main Process
// ======================


// on user click of start button, remove start button and show question

	$("#startButton").on("click",function(event) {
		$(this).remove();
		showQuestion();
		startTimer();

	});

	// // for (var i = 0; i <= 0 ; i++) {
	
	// 	$("#answers").on("click",function(event){
	// 		userAnswer = $(this)
	// 			if(userAnswer == questionsArr[count].correctAnswer) {
	// 				rightAnswer();
	// 			}
	// 			if (userAnswer !== questionsArr[count].correctAnswer) {
	// 				wrongAnswer();
	// 			}	



	// 	});
	// };




}); // closing out document ready