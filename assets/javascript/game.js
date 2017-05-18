$(window).on("load", function(){
	var goalNum = Math.floor((Math.random() * 120) + 19);
	var rubyNum = Math.floor((Math.random() * 12) + 1);
	var sapphireNum = Math.floor((Math.random() * 12) + 1);
	var emeraldNum = Math.floor((Math.random() * 12) + 1);
	var topazNum = Math.floor((Math.random() * 12) + 1);
	var userScore = 0;
	var numWins = 0;
	var numLosses = 0;

	$("#rubyPic").click(function() {
  		userScore = userScore + rubyNum;
  		$("#userSum").text(userScore);
  		if (userScore === goalNum) {
		userScore = 0;
		goalNum = Math.floor((Math.random() * 120) + 19);
		rubyNum = Math.floor((Math.random() * 12) + 1);
		sapphireNum = Math.floor((Math.random() * 12) + 1);
		emeraldNum = Math.floor((Math.random() * 12) + 1);
		topazNum = Math.floor((Math.random() * 12) + 1);
		numWins++;
		$("#gameMsg").text("Congratulations, You Won!");
		$("#winCount").text(numWins);
		$("#goalDiv").text(goalNum);
		} else if (userScore > goalNum) {
			userScore = 0;
			goalNum = Math.floor((Math.random() * 120) + 19);
			rubyNum = Math.floor((Math.random() * 12) + 1);
			sapphireNum = Math.floor((Math.random() * 12) + 1);
			emeraldNum = Math.floor((Math.random() * 12) + 1);
			topazNum = Math.floor((Math.random() * 12) + 1);
			numLosses++;
			$("#gameMsg").text("Sorry, You Lost!");
			$("#lossCount").text(numLosses);
			$("#goalDiv").text(goalNum);
		} else if (userScore > 0) {
			$("#gameMsg").text("Keep Going!");
		};
  	});

	$("#sapphirePic").click(function() {
  		userScore = userScore + sapphireNum;
  		$("#userSum").text(userScore);
  		if (userScore === goalNum) {
		userScore = 0;
		goalNum = Math.floor((Math.random() * 120) + 19);
		rubyNum = Math.floor((Math.random() * 12) + 1);
		sapphireNum = Math.floor((Math.random() * 12) + 1);
		emeraldNum = Math.floor((Math.random() * 12) + 1);
		topazNum = Math.floor((Math.random() * 12) + 1);
		numWins++;
		$("#gameMsg").text("Congratulations, You Won!");
		$("#winCount").text(numWins);
		$("#goalDiv").text(goalNum);
		} else if (userScore > goalNum) {
			userScore = 0;
			goalNum = Math.floor((Math.random() * 120) + 19);
			rubyNum = Math.floor((Math.random() * 12) + 1);
			sapphireNum = Math.floor((Math.random() * 12) + 1);
			emeraldNum = Math.floor((Math.random() * 12) + 1);
			topazNum = Math.floor((Math.random() * 12) + 1);
			numLosses++;
			$("#gameMsg").text("Sorry, You Lost!");
			$("#lossCount").text(numLosses);
			$("#goalDiv").text(goalNum);
		} else if (userScore > 0) {
			$("#gameMsg").text("Keep Going!");
		};
	});

	$("#emeraldPic").click(function() {
 	 	userScore = userScore + emeraldNum;
  		$("#userSum").text(userScore);
  		if (userScore === goalNum) {
		userScore = 0;
		goalNum = Math.floor((Math.random() * 120) + 19);
		rubyNum = Math.floor((Math.random() * 12) + 1);
		sapphireNum = Math.floor((Math.random() * 12) + 1);
		emeraldNum = Math.floor((Math.random() * 12) + 1);
		topazNum = Math.floor((Math.random() * 12) + 1);
		numWins++;
		$("#gameMsg").text("Congratulations, You Won!");
		$("#winCount").text(numWins);
		$("#goalDiv").text(goalNum);
		} else if (userScore > goalNum) {
			userScore = 0;
			goalNum = Math.floor((Math.random() * 120) + 19);
			rubyNum = Math.floor((Math.random() * 12) + 1);
			sapphireNum = Math.floor((Math.random() * 12) + 1);
			emeraldNum = Math.floor((Math.random() * 12) + 1);
			topazNum = Math.floor((Math.random() * 12) + 1);
			numLosses++;
			$("#gameMsg").text("Sorry, You Lost!");
			$("#lossCount").text(numLosses);
			$("#goalDiv").text(goalNum);
		} else if (userScore > 0) {
			$("#gameMsg").text("Keep Going!");
		};
	});

	$("#topazPic").click(function() {
  		userScore = userScore + topazNum;
  		$("#userSum").text(userScore);
  		if (userScore === goalNum) {
		userScore = 0;
		goalNum = Math.floor((Math.random() * 120) + 19);
		rubyNum = Math.floor((Math.random() * 12) + 1);
		sapphireNum = Math.floor((Math.random() * 12) + 1);
		emeraldNum = Math.floor((Math.random() * 12) + 1);
		topazNum = Math.floor((Math.random() * 12) + 1);
		numWins++;
		$("#gameMsg").text("Congratulations, You Won!");
		$("#winCount").text(numWins);
		$("#goalDiv").text(goalNum);
		} else if (userScore > goalNum) {
			userScore = 0;
			goalNum = Math.floor((Math.random() * 120) + 19);
			rubyNum = Math.floor((Math.random() * 12) + 1);
			sapphireNum = Math.floor((Math.random() * 12) + 1);
			emeraldNum = Math.floor((Math.random() * 12) + 1);
			topazNum = Math.floor((Math.random() * 12) + 1);
			numLosses++;
			$("#gameMsg").text("Sorry, You Lost!");
			$("#lossCount").text(numLosses);
			$("#goalDiv").text(goalNum);
		} else if (userScore > 0) {
			$("#gameMsg").text("Keep Going!");
		};
	});

	$("#goalDiv").text(goalNum);

});