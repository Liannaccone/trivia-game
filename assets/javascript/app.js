
console.log("hi");
$(document).ready(function() {


// VARIABLES

	// array of questions
	var questionsArr = [
		
		// question 1; index[0]
		{
			question: "do you like cats",
			possibleAnswers: ["yes", "maybe", "no", "absolutely not"],
			correctAnswer: "absolutely not",
			correctImage: "",
		},

		// question 2; index[1]
		{
			question: "",
			possibleAnswers: [],
			correctAnswer: "",
			correctImage: "",
		},

		// question 3; index[2]
		{
			question: "",
			possibleAnswers: [],	
			correctAnswer: "",
			correctImage: "",
		}

	] //closing out questionsArr




	// count will keep track of the index of the currently displaying question
	var count = 0


	//  variables to keep track of use responses
	var correctCount = 0
	var wrongCount = 0
	var unansweredCound = 0




//  FUNCTIONS
//  ====================

	
	//  removes start button
	function removeStartButton() {
		$("#startButton").remove();
	};


	// populates fields with the first question
	function showQuestion() {
		$("#question").html(questionsArr[count].question)
		$("#answers").html("<li>" + questionsArr[count].possibleAnswers[0] + 
			"</li><li>" + questionsArr[count].possibleAnswers[1] + 
			"</li><li>" + questionsArr[count].possibleAnswers[2] + 
			"</li><li>" + questionsArr[count].possibleAnswers[3] + 
			"</li>");
	};




// Main Process
// ======================




	// on user click of start button, populate




}); // closing out document ready