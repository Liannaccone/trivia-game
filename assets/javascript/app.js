

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

	function restartGame() {
		correctCount = 0;
		incorrectCount = 0;
		unansweredCount = 0;
		number = 10;
		count = 0;
		userAnswer = "";
		showQuestion();
		
	}

	function showGameOver () {
		$("#timer").empty();
		$("#answers").empty();
		$("#response").empty();
		$("#question").html("<h2>All done, here's how you did:</div>")
		$("#question").append("<div> Correct Answers: " + correctCount + "</div><div>Incorrect Answers: " + incorrectCount + "</div><div>Unanswered: " + unansweredCount + "</div>")
		$("#question").append("<button class='restart-button'><strong>Start Over?</strong></button>")
		$(".restart-button").on("click", function(){
			restartGame();
		});
	}

	function timerRestart() {
		number = 10
		$("#timer").html("<span>" + number + " seconds remaining</span>");
		questionInt = setInterval(decrement, 1000)
	}

	function stop() {
		clearInterval(questionInt);
		unansweredCount++;
		count++;
		//  if no more questions left, show end screen
		if (count === questionsArr.length) {
			showGameOver()
		}
		// else show next question
		else {
			showQuestion();
		};
	};



	// populates fields with the first question
	function decrement() {
		number--
		$("#timer").html("<span>" + number + " seconds remaining</span>");
		if (number == 0) {
				stop();
			}

		}


	function showQuestion() {
		timerRestart();
		$("#answers").empty();		
		$("#response").empty();
		$("#question").html(questionsArr[count].question)
		for (var i = 0; i < questionsArr[count].possibleAnswers.length; i++) {
			$("#answers").append("<div><button class='option-button' data-name='"+ questionsArr[count].possibleAnswers[i]+"'>" + questionsArr[count].possibleAnswers[i] + "</button></div>");
		};
	

		$(".option-button").on("click",function(){
			userAnswer = $(this).attr("data-name");
				if (userAnswer === questionsArr[count].correctAnswer) {
					correctCount++;
					count++;
					clearInterval(questionInt);
					if(count === questionsArr.length) {
						showGameOver()
					};
					if (count < questionsArr.length) {
						showQuestion();
					};
					
					
				}

				else  {
					incorrectCount++;
					count++;
					clearInterval(questionInt);
					if(count === questionsArr.length) {
						showGameOver()
					};
					if(count < questionsArr.length) {
						showQuestion();
					};
				}
		});
	};




		$("#startButton").on("click",function() {
			$(this).hide();
			showQuestion();

		});







}); // closing out document ready