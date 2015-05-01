window.data={
	
	"about-site":{
		"name":"Site Details",
		"title":"About- The Site",
		"description": "I built this site using HTML, CSS (no framework), Javascript (with JQuery).",
		"decision":1,
		"button1":"Take the first step",
		"destination1":"about-me",
		"impact1":0,
	},

	"about-me":{
		"name":"Jason Details",
		"title":"About- Jason",
		"description":"I'm a product manager at an enterprise marketing software company called Percolate and run a blog on tech, business, and fitness called The Art of Ass-Kicking that reaches hundreds of thousands of people every year. I previously co-founded a Y Combinator backed ridesharing startup called Ridejoy, built a digital volunteer platform at the Smithsonian, and set a Guinness World Record in Aztec Pushups. <br><br>Let me know what you think of this project: @jasonshen",
		"decision":1,
		"button1":"Play StartupAdventure",
		"destination1":"step0",
		"impact1":0,
	},

	"step0":{
		"name":"Introduction",
		"title":"Welcome to the Jungle",
		"description":"It's your first day at Rocketship Ventures — Silicon Valley's newest startup accelerator. The managing director of the program greets you a big handshake and a sheepish grin. 'Welcome! Er.. what was your name again?'",
		"decision":"1",
		"button1":"Take the first step",
		"destination1":"step1",
		"impact1":0,

	},

	"step1":{
		"name":"Choosing Company",
		"title":"Spray and Pray",
		"description":"'Ah, that's right <span class='name'></span>.' he exclaims, 'Of course. We're so excited to have join us at Rocketship Labs. We've brought in 50 companies and at least one of you should return us several million.'<br><br>The director, Jean-Luc, has a dismissive air that really annoys you and you want to reply with a little snark. But that's probably a bad idea on day one, right?",
		"decision":"2",
		"button1":"Bite your tongue",
		"destination1":"step1A",
		"impact1":1,
		"button2":"Let him have it",
		"destination2":"step1B",
		"impact2":-1,
		
	},

	"step1A":{
		"name":"Tongue Bit",
		"title":"Pick Your Poison",
		"description":"A snarky comment bubbles up to your lips regarding his attitude towards this batch but you decide to keep your mouth shut this one time. You have to cultivate a thick skin to be an entrepreneur right? Anyway, success is the best revenge.<br><br>'So ___, what's the name of your company?' he asks.",
		"decision":"2",
		"button1":"Ping (mobile chat)",
		"destination1":"step2-choice1",
		"impact1":0,
		"button2":"LittleLuxe (subscription fashion)",
		"destination2":"step2-choice2",
		"impact2":0,
		
	},

	"step1B":{
		"name":"Snark",
		"title":"Not Pulling Punches",
		"description":'"Well Jean-Luc," you say with a smirk, "I hope you\'re able to afford hair replacement surgery for that thinning top you\'ve got there.".<br><br>"You little prick! We\'ll see how confident you are at Demo Day. I\'ll make sure your team goes dead last. What the hell is your company\s name anyway?"',
		"decision":"2",
		"button1":"Ping (mobile chat)",
		"destination1":"step2-choice1",
		"impact1":0,
		"button2":"LittleLuxe (subscription fashion)",
		"destination2":"step2-choice2",
		"impact2":0,
		
	},

	"step2-choice1":{
		"name":"Start of Mobile Chat app",
		"title":"Building Your MVP",
		"description":"'Ah, that's right' says the MD. 'Carry on then!'<br><br> You head to your desk. In the last year, you and your friend Taylor had built out a small chat app with a really hilarious set of stickers that caught fire on your college campus. You took a leave of absence when the app hit 100k users and applied to Rocketship Labs. Now, you were finally here.<br><br>You look around and think about what you should do next.",
		"decision":"2",
		"button1":"Get down to work!",
		"destination1":"step3",
		"impact1":1,
		"button2":"Browse Geek News for a while!",
		"destination2":"step3",
		"impact2":-1,
	},

	"step2-choice2":{
		"name":"Can't go further",
		"title":"Halt: The Fashion Police",
		"description":"Oh sorry, this storyline isn't built out yet. You'll have to continue down the path of the chat app for now =/",
		"decision":"1",
		"button1":"Continue on the mobile chat app path",
		"destination1":"step2-choice1",
		"impact1":0,

	},


"step3":{
		"name":"Launch",
		"title":"Hello World",
		"description":"After weeks of hard work, you've put together a bunch of new features that make your app more powerful and sticky than ever. Dissappearing audio snippets. They're huge.<br><br> Rocketship Labs encourages their companies to launch publicly before Demo Day. Traditionally, startups would launch on the well-regarded startup and tech news site, TechMunch, but Taylor, your cofounder, wants to try a fast-growing social news site for apps called AppHunt. What do you do?",
		"decision":"2",
		"button1":"Launch on AppHunt",
		"destination1":"step3-choice1",
		"impact1":1,
		"button2":"Launch on TechMunch",
		"destination2":"step3-choice2",
		"impact2":0,
	},

	"step3-choice1":{
		"name":"Launch - AppHunt",
		"title":"You've Been Hunted",
		"description":"You submit your app to AppHunt and start begging friends and batchmates to upvote the post. Some of them do so (a few more grudingly than you'd like) and you break into the top 10 for the day!<br><br>Nice work! A surge of traffic hits your landing page (custom designed to welcome AH users, 'natch) and app downloads are spiking.",
		"decision":"1",
		"button1":"Continue",
		"destination1":"step3-choice1A",
		"impact1":-3,
	},

	"step3-choice1A":{
		"name":"Launch - AppHunt 2",
		"title":"Tried So Hard",
		"description":"But then to your horror, you see yourself  dropping down the page! What's going on? Someone on your team wonders about the 'voting ring detection', whatever the hell that is. A few hours later, you are at the bottom of 45 new apps. <br><br>Such bullshit.",
		"decision":"1",
		"button1":"Suck it up, kid",
		"destination1":"step4",
		"impact1":0,
	},

	"step3-choice2":{
		"name":"Launch - TechMunch",
		"title":"No Embargos",
		"description":"Through a friend of a friend, you're able to secure an interview with a reporter at TechMunch. They breeze through the interview, but you're able to get a few choice quotes in there.<br><br>24 hours later, you get a surge of traffic as TM's site blows up. Yeah the headline is sensational and they butcher your quote, but hey, traffic is traffic right?",
		"decision":"1",
		"button1":"Continue",
		"destination1":"step4",
		"impact1":"1",
	},


"step4":{
		"name":"Funding",
		"title":"Mo Money, Mo Problems",
		"description":"Demo Day comes up and your team gives a strong showing. A couple investors come up to you afterward and ask you about your company. <br><br>Dan, an early employee at Facenook, seems really interested in your company. He can only put in $150k, which won't last even a year but he seems like he could be fun to hang out with. Raj, a partner at Ramani Ventures, wears a suit and has an MBA (ick!), but he's offering a cool two million bucks, not bad for an app that's six months old.",
		"decision":"2",
		"button1":"Dan the angel investor",
		"destination1":"step4-choice1",
		"impact1":1,
		"button2":"Raj the VC",
		"destination2":"step4-choice2",
		"impact2":0,
	},


"step4-choice1":{
		"name":"Funding - Angel",
		"title":"Some Angels Are Real",
		"description":"Dan smiles as he hands you a check for $150k. He hits up a few of his friends and they're able to ultimately come up with just over $800k for you. Sweet! <br><br>Over a few drinks, he shares some of his best tips with you and Taylor for creating super smooth user interfaces and tweets about your app, which makes your batch mates super jealous.",
		"decision":"1",
		"button1":"Continue",
		"destination1":"step5",
		"impact1":1,
	},

"step4-choice2":{
		"name":"Funding - VC",
		"title":"Root of All Evil",
		"description":"Look, you're all for cool investors, but two million offers an amazing runway to build your company. You head back to the Ramani Ventures office in Raj's Mercedes. <br><br>He put a complicated looking document in front of you to sign, and says its an exploding offer. You have 24 hours to decide whether to take it.",
		"decision":"1",
		"button1":"Sign it (of course right?)",
		"destination1":"step4-choice2A",
		"impact1":-3,
	},

"step4-choice2A":{
		"name":"Funding - VC2",
		"title":"The Devil is in the Details",
		"description":"It turns out that money came with a price. You've just signed a contract with a 3x liquidation preference and a valuation that gives Ramani Ventures 35% of your company. <br><br>Damn. That sucks.",
		"decision":"1",
		"button1":"Keep pushing",
		"destination1":"step5",
		"impact1":-1,
	},

"step5":{
		"name":"Growth",
		"title":"Gotta Catch 'Em All",
		"description":"With the funding, you've been able to build out a small team of scrappy hackers and hustlers. You've grown the user base through referral mechanisms and a couple publicity stunts. But now you're starting to hit a stall out point on your growth phase.<br><br>You need to expand into some new markets and really find that next phase of growth. After talking with your team, you boil it down into two options: expand internationally, or focus on professional / workplace chat.",
		"decision":"2",
		"button1":"Going global",
		"destination1":"step5-choice1",
		"impact1":-1,
		"button2":"Enterprise communication",
		"destination2":"step5-choice2",
		"impact2":1,
	},

"step5-choice1":{
		"name":"Growth - International",
		"title":"Call Me Mr. International",
		"description":"You decide to go big or go home. You contract a translation service to conver your app into 17 different languages and start buying app installs until you're the number one social app in each of the stores. <br><br>It turns out, International users don't monetize as well, either through ads or in-app purchases. Unfortunately, you had to throw a lot of money down the drain before you were really able to figure this out.",
		"decision":"1",
		"button1":"It was worth a shot",
		"destination1":"step6",
		"impact1":0,
	},

"step5-choice2":{
		"name":"Growth - Enterprise",
		"title":"Everyday I'm Hustling",
		"description":"Your entry into corporate chat is a breath of fresh air in a tired market. Your consumer-oriented approach gets office drones excited to come into work, driving up productivity. It's not as glamorous but you pivot into a communications and collaboration tool for the enterprise. <br><br>You skip SXSW for industry conferences in oil, logistics, paper, and mining, where you talk about the power of mobile tools to drive greater profitibility. Congratulations",
		"decision":"1",
		"button1":"You little mogul, you",
		"destination1":"step6",
		"impact1":0,
	},

	"endGame-1":{
		"title":"Bankrupt",
		"description":"After maxing out a dozen credit cards, you declare bankruptcy and spend the next decade buying things only with cash and relying heavily on parents and significant others for money.",

	},	

}
