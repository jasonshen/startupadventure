window.data={
	"coord":{"lon":-0.13,"lat":51.51},
	"sys":{"message":0.0214,"country":"GB","sunrise":1428039025,"sunset":1428086221},
	"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],
	"base":"stations",
	"main":{"temp":283.548,"temp_min":283.548,"temp_max":283.548,"pressure":1019.83,"sea_level":1027.64,"grnd_level":1019.83,"humidity":98},
	"wind":{"speed":1.41,"deg":13.501},
	"clouds":{"all":80},
	"rain":{"3h":0.4475},
	"dt":1428078809,
	"id":2643743,
	"name":"London",
	"cod":200,
	
	"0":{
		"name":"Introduction",
		"title":"Welcome to the Jungle",
		"description":"It's your first day at Rocketship Ventures — Silicon Valley's newest startup accelerator. The managing director of the program greets you a big handshake and a sheepish grin. 'Welcome! Er.. what was your name again?'",
		"options":{
			"type":"input",
			"next":"1",
		},
	},

	"1":{
		"name":"Choosing Company",
		"title":"Pick Your Poison",
		"description":"'Ah, that's right ____.' he exclaims, 'Of course. We're so excited to have join us at Rocketship Labs. We've brought in 50 companies and at least one of you should return us several million.'",
		"options":{
			"type":"continue",
			"next":"1A",
		},
	},

	"1A":{
		"name":"Choosing Company Cont",
		"title":"Pick Your Poison",
		"description":"A snarky comment bubbles up to your lips regarding his attitude towards this batch but you decide to keep your mouth shut this one time. 'So ___, what's the name of your company?' he asks.",
		"options":{
			"type":"choice",
			"one":"A mobile chat application",
			"next-one":"2-1",
			"two":"A subscription fashion accessory service",
			"next-two":"2-2",
		},

	"2-1":{
		"name":"Start of Mobile Chat app",
		"title":"Building Your MVP",
		"description":"You smile as you head back to your desk. In the last year, you had built out a small chat app that had gotten surprisingly high number of folks ",
		"options":{
			"type":"choice",
			"one":"A mobile chat application",
			"next-one":"2-1",
			"two":"A subscription fashion accessory service",
			"next-two":"2-2",
		},

	},



}