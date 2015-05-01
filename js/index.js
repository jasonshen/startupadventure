$(function () {

//	var data = $.getJSON("data/data.json", function() {
//  alert("success");
//  })


var startup = {
    founder:"John",
    type:"chat",
    status: 3,
    statusMsg: "Hanging in there",
    statusImg: "3.png",
};

var data = window.data;



function fillCard(oldcardId, cardId) {
	console.log("got the "+ cardId);
	console.log('<img src="'+startup.statusImg+'">');

	if (cardId == 'step6') {
		var html = endGame(startup.status)
	}

	else {

		var html = '<div class="card active" id="' + cardId + '">' + 
				'<img class="top-image" src="img/header.png" >' +
				'<h2 class="title">' + data[cardId].title +'</h2>'+
				'<div class="status" text-align="right"></div>' +
				'<p class="description">' + data[cardId].description + '</p>';

		if (data[cardId].decision == 1) {
			html = html +'<div class="button1 btn" data-destination="'+data[cardId].destination1+'" data-cardId="' + cardId + '" data-impact="' + data[cardId].impact1 +'">'+ data[cardId].button1 + '</div>' ;
		}

		if (data[cardId].decision == 2) {
			console.log("x2 decisions")
			html = html + '<div class="button1 btn" data-destination="'+data[cardId].destination1+'" data-cardId="' + cardId + '" data-impact="' + data[cardId].impact1 +'">'+ data[cardId].button1 + '</div>' + '<div class="button2 btn btn2" data-destination="' + data[cardId].destination2 + '" data-cardId="'+ cardId + '" data-impact="' + data[cardId].impact2 +'">' + data[cardId].button2 + '</div></div>';
		}

		if (data[cardId].decision == "input") {
			html = html + 'Love';
		}
	}

	// Adds html to the bottom of wrapper, slides up old card, shows the new card, removes class active on old card, adds it to new card (not sure if that last part is necessary)
	$('#wrapper').append(html);
	$("#"+ oldcardId).slideUp();
	$("#"+ cardId).show();
	$("#"+ oldcardId).removeClass('active'); 
	$("#"+ cardId).addClass('active'); 

}

// Listener for clicks on .btn, triggers other parts
$('#wrapper').on("click", ".btn", function(e) {
	e.preventDefault();

	// Adds the impact to startup status, then changes the message to match the status
	var change = parseInt(this.getAttribute("data-impact"))
	startup.status = manageStatus(startup.status, change);

	// Fills the card with data and slides it forward
	fillCard((this).getAttribute("data-cardId"),(this).getAttribute("data-destination"));

	// Updates the status with the new status
	$(".status").html("<b>Your Status: </b><img style=\"vertical-align:middle; width:30px; height:30px;\" src=\"img/"+ startup.statusImg + "\"> " + startup.statusMsg);

});

// Changes the status and makes sure it doesn't go above or below range, updates the status message and changes statusImg to the right file
function manageStatus(old_status, change) {
	console.log("Inside manageStatus");
	var final_status = old_status + change;
	if (final_status > 6) { final_status = 6; }
	else if (final_status < 0) {final_status = 0;}

	startup.statusImg = final_status + ".png ";

	switch (final_status) {
		case 0:
    		startup.statusMsg = "Squatting in an abandoned building, please send food";
    		break;
		case 1:
			startup.statusMsg = "Moved back in with my parents";
			break;
		case 2:
			startup.statusMsg = "Don't want to talk about";
			break;
		case 3: 
			startup.statusMsg = "Hanging in there!";
			break;
		case 4:
			startup.statusMsg = "Startup life is a total rollercoaster!"
			break;
		case 5:
			startup.statusMsg = "We're growing really fast";
			break;
		case 6:
			startup.statusMsg = "TOTALLY CRUSHING IT";
			break;

		}

	return final_status;

}

// Returns the data for the final status
function endGame(finalStatus) {
	console.log("In the final status situation!");

	var exitTitle = "exit Title";
	var exitMsg = "exit Message";
	var exitImg = "img/fandom_clone.svg";

	if (finalStatus < 0){
		finalStatus = 0;
	}

	else if (finalStatus > 6) {
		finalStatus = 6;
	}

		switch (finalStatus) {
		case 0:
    		exitTitle = "Bankrupt";
    		exitMsg = "After maxing out a dozen credit cards, you declare bankruptcy and spend the next decade buying things only with cash and relying heavily on parents and significant others for money.";
    		break;
		case 1:
    		exitTitle = "Shameful Shutdown";
    		exitMsg = "You burn out of cash suddenly and have to fire your staff with no severance. They hate you.";
			break;
		case 2:
    		exitTitle = "Graceful Shutdown";
    		exitMsg = "You close shop and your friends throw you a party. You get a job soon after at Moogle.";
			break;
		case 3: 
    		exitTitle = "Zombie Startup";
    		exitMsg = "Your company hits break even but never gets big. You keep working for a few years before taking a leave of absence and head down to South American to 'find yourself'.";
			break;
		case 4:
		    exitTitle = "Team Acquisition";
    		exitMsg = "You get a small sum that makes the investors whole and gets you a downpayment on your future home.";
			break;
		case 5:
			exitTitle = "Big Acquisition";
    		exitMsg = "You are now senior vice president of a major technology company. Great work.";
			break;
		case 6:
			exitTitle = "IPO";
    		exitMsg = "You're a billionaire. Invite us onto your yacht sometime, will ya?";
			break;
		}

	var html = '<div class="card active">' + 
				'<img class="top-image" src="img/header.png" >' +
				'<h2 class="title">'+ exitTitle +'</h2>'+
				'<div class="description-end">' +'<img class="end-image" src="img/'+finalStatus+'.svg"><p>'+exitMsg+ '</p></div>'+
				'<div class="btn2"><a href="index.html">Try Again?</a></div>'
	return html;
}


});