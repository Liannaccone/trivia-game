

$(document).ready(function() {


// VARIABLES

	// array of questions
	var questionsArr = [
		
		// question 1; index[0]
		{
			question: "Which of these is not a duck?",
			possibleAnswers: ["green-winged teal", "drake", "coot", "wigeon"],
			correctAnswer: "coot",
			correctImage: "http://www.nzbirdsonline.org.nz/sites/all/files/1200333Adult%20coot%20Hamilton%202012.jpg",
		},

		// question 2; index[1]
		{
			question: "Which of these ducks is known for its distintive tail and rolling whistle?",
			possibleAnswers: ["wigeon", "shoveler", "pintail", "gadwall"],
			correctAnswer: "pintail",
			correctImage: "https://www.allaboutbirds.org/guide/PHOTO/LARGE/pintail_crotty2.jpg",
		},

		// question 3; index[2]
		{
			question: "What distinguishes mallard drakes?",
			possibleAnswers: ["purple bills","green heads","being smaller than mallard hens","red tail feathers"],	
			correctAnswer: "green heads",
			correctImage: "http://www.grahamowengallery.com/forum/duck-3.jpg",
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

	function correctResponse() {
		$("#answers").empty();
		$("#question").html("<h2>Correct!</h2>");
		$("#question").append("<img src='"+ questionsArr[count].correctImage + "' width='600' height='400'>");
		correctCount++;
		count++;
		clearInterval(questionInt);
		if(count === questionsArr.length) {
			setTimeout(showGameOver,3000);
		};
		if (count < questionsArr.length) {
			setTimeout(showQuestion,3000);
		};
	}

	function incorrectResponse() {
		$("#answers").empty();
		$("#question").html("<h2>Incorrect</h2>");
		$("#question").append("<div> The correct answer was: " + questionsArr[count].correctAnswer + "</div");
		$("#question").append("<img src='" + questionsArr[count].correctImage + "' width='600' height='400'>");
		incorrectCount++;
		count++;
		clearInterval(questionInt);
		if(count === questionsArr.length) {
			setTimeout(showGameOver,3000);
		};
		if(count < questionsArr.length) {
			setTimeout(showQuestion,3000);
		};
	}

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
		$("#answers").empty();
		$("#question").html("<h2>Out of Time!</h2>");
		$("#question").append("<div> The correct answer was: " + questionsArr[count].correctAnswer + "</div");
		$("#question").append("<img src='" + questionsArr[count].correctImage + "' width='600' height='400'>");
		clearInterval(questionInt);
		unansweredCount++;
		count++;
		//  if no more questions left, show end screen
		if (count === questionsArr.length) {
			setTimeout(showGameOver, 3000);
		}
		// else show next question
		else {
			setTimeout(showQuestion, 3000);
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
					correctResponse()	
				}

				else  {
					incorrectResponse();
				}
		});
	};




		$("#startButton").on("click",function() {
			$(this).hide();
			showQuestion();

		});







}); // closing out document ready