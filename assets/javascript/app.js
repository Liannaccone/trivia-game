

$(document).ready(function() {


// VARIABLES

	// array of questions
	var questionsArr = [
		
		// question 1; index[0]
		{
			question: "do you like cats",
			possibleAnswers: ["wrong", "wrong", "answer1", "wrong"],
			correctAnswer: "answer1",
			correctImage: "http://via.placeholder.com/200x200",
		},

		// question 2; index[1]
		{
			question: "do you like dogs?",
			possibleAnswers: ["answer2", "dog", "dog2", "dog3"],
			correctAnswer: "answer2",
			correctImage: "http://via.placeholder.com/200x200",
		},

		// question 3; index[2]
		{
			question: "do you like turtles",
			possibleAnswers: ["turtle1","answer3","turtle2","turtle4"],	
			correctAnswer: "answer3",
			correctImage: "http://via.placeholder.com/200x200",
		}

	] //closing out questionsArr




	// count will keep track of the index of the currently displaying question
	var count = 0;

	// questionInt will hold the setInterval when we start the trivia game
	var questionInt;

	// setting question start equal to 10 (seconds)
	var number = 10


	//  variables to keep track of use responses
	var correctCount = 0;
	var incorrectCount = 0;
	var unansweredCount = 0;

	// variable to store user answer
	var userAnswer = "";





//  FUNCTIONS
//  ====================

	function showGameOver () {
		$("#game").empty();
	}

	function timerReset() {
		number = 10
	}

	function stop() {
		clearInterval(questionInt);
		unansweredCount++;
		count++;
		timerReset();
		//  if no more qwuestions left, show end screen
		if (count === questionsArr.length) {
			showGameOver()
		}
		// else show next question
		else {
			showQuestion();
		}

	}



	// populates fields with the first question
	function decrement() {
		number--
		$("#timer").html("<span>" + number + " seconds remaining</span>");
		if (number == 0) {
				stop();
			}

		}


	function showQuestion() {
		questionInt = setInterval(decrement, 1000)








		$("#answers").empty();		
		$("#response").empty();
		$("#question").html(questionsArr[count].question)
		for (var i = 0; i < questionsArr[count].possibleAnswers.length; i++) {
			$("#answers").append("<div><button class='option-button' data-name='"+ questionsArr[count].possibleAnswers[i]+"'>" + questionsArr[count].possibleAnswers[i] + "</button></div>");
		};
	



	// function startGame() {

		// showQuestion();

		$(".option-button").on("click",function(){
			$(".option-button").off("click");
			userAnswer = $(this).attr("data-name");
			console.log(userAnswer);
				if (userAnswer === questionsArr[count].correctAnswer) {
					correctCount++;
					count++;
					console.log(correctCount);
					showQuestion();
					
				}
				else  {
					incorrectCount++;
					count++;
					console.log(incorrectCount);
					showQuestion();

				}
	
		});

	};
	// };

		$("#startButton").on("click",function() {
			$(this).hide();
			showQuestion();
		// startTimer();

	});




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


	// function decrement() {
	// 	// decrease the questionStartby one
	// 	questionStart--;

	// 	// show the number in the #timer tag
	// 	$("#timeLeft").html("Time Remaining: " + questionStart);

	// 	// once the questionStart hits zero...
	// 	if(questionStart === 0 ) {

	// 		// run the stop function
	// 		stop();

	// 		// replace the #game div showing the user's score
	// 		$("#game").html("<h2> All done, here's how you did:</h2><div>Correct Answers: " + correctCount + "</div><div> Incorrect Answers: " + incorrectCount + "</div><div>Unanswered: " + unansweredCount + "</div>")


	// 	}
	// }

	// // timer stop function
	// function stop() {
	// 	clearInterval(questionStart);
	// }


// Main Process
// ======================


// on user click of start button, remove start button and show question





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