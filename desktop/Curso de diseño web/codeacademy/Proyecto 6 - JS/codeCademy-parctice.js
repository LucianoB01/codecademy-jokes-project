const generateRand = () => {
    return Math.floor(Math.random() * 25);
}

const jokes = ["Who’s there? Nobel. Nobel who? Nobel…that’s why I knocked!", "Who’s there? Tank. Tank who? You’re welcome.", "Who’s there? Luke. Luke who? Luke through the peep hole and find out.", 
"Who’s there? Figs. Figs who? Figs the doorbell, it’s not working!", "Who’s there? Annie. Annie who? Annie thing you can do, I can do too!", 
"Who’s there? Cow says. Cow says who? No, a cow says mooooo", "Who’s there?Hal. Hal who? Hal will you know if you don’t open the door?", 
"Who’s there? Alice. Alice who? Alice fair in love and war.", "Who’s there? Says. Says who? Says me!", "Who’s there? Honey bee. Honey bee who? Honey bee a dear and get that for me please!", 
"Who’s there? A little old lady. A little old lady who? Hey, you can yodel!", "Who’s there? Euripides. Euripides who? Euripides clothes, you pay for them!", 
"Who’s there? Snow. Snow who? Snow use. The joke is over.", "Who’s there? Hawaii. mHawaii who? I’m good. Hawaii you?", "Who’s there? Woo. Woo who? Glad you’re excited, too!", 
"Who’s there? Banana. Banana who? Knock, knock. Banana. Banana who? Knock, knock. Who’s there? Orange. Orange who? Orange you glad I didn’t say banana?", 
"Who’s there? Orange. Orange who? Orange you going to let me in?", "Who’s there? Who. Who who? I didn’t know you were an owl!", 
"Who’s there? Anita. Anita who? Let me in! Anita borrow something.", "Who’s there? Water. Water who? Water you doing telling jokes right now? Don’t you have things to do?", 
"Who’s there? Leaf. Leaf who? Leaf me alone!", 
"Who’s there? Annie. Annie who? Annie way you can let me in?", "Who’s there? Nana. Nana who? Nana your business!", 
"Who’s there? Needle. Needle who? Needle little help right now!", "Who’s there?Canoe. Canoe who? Canoe come out now?"]; 

const tellJoke = () => {
    return jokes[generateRand()]; 
}

console.log(tellJoke());