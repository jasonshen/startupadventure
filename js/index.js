$(function () {

//	var data = $.getJSON("data/data.json", function() {
//  alert("success");
//  })


	var startup = {
	    founder:"John",
	    type:"unknown",
	    users:0,
	    runway:12
	};

	var data = window.data


	$(".status").text("Users: " + startup.users + " and Runway: " + startup.runway + " months left");


	$('#intro-a').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
			startup.type = 'chat';
			startup.users += 10000;
			startup.runway -= 3;
			move('#next');
		});

	$('#intro-b').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
			startup.type = 'ecommerce';
			startup.users += 100;
			startup.runway -= 6;
			move('#next');

		});

	$('#next-a').click( function(e) {
			e.preventDefault();
			console.log("Got the click");
			startup.users += 10000;
			startup.runway += 6;
			move('#end1');

		});

	$('#next-b').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
			startup.users += 100000;
			startup.runway += 12;
			move('#end2');

		});

	$('#end1-a').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
			startup.users = 0;
			startup.runway = 12;
			move('#intro');
		});

	$('#end1-b').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
		});

	$('#end2-a').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
			startup.users = 0;
			startup.runway = 12;
			move('#intro');
		});

	$('#end2-b').click( function(e) {
			e.preventDefault();
			console.log("Got the click")
		});

	function move(stage) {
			$(stage).siblings().slideUp();
			$(stage).show();
			$(".status").text("Users: " + startup.users + " and Runway: " + startup.runway + " months left");
	}

});