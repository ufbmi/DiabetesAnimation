var storytext = {};

var storytext_en = {
	"screen1": "",
	"screen2": "Our bodies use insulin to get glucose into our cells for energy. When our bodies don’t make enough insulin, glucose can’t enter our cells and glucose builds up in the blood. As another source of energy, the body makes ketones. But too many ketones can make us sick and cause weakness, thirst, vomiting, frequent peeing, and heavy breathing.",
	"screen3": "Our friends Zach and Kara will help us see where ketones come from and what to do when we have them. Zach doesn’t have diabetes, so let’s first check out how his body works.",
	"screen4": "Zach doesn’t have diabetes. His pancreas makes insulin which allows glucose to go into the cells for energy. Insulin is like a key that unlocks the cell and lets glucose inside.",
	"screen5": "Now let’s check out what’s different in diabetes.",
	"screen6": "Kara has diabetes. Her pancreas does not make enough insulin to move glucose from her bloodstream into her cells. When glucose can’t get in, the cells feel weak and so does Kara.",
	"screen7":"",
	"screen8": "Kara’s bloodstream gets so full of glucose that her body tries to get rid of it through her kidneys. But, as the glucose passes through her kidneys, it pulls water with it. This makes Kara have to pee often. With her water being peed out all the time, Kara is very thirsty.",
	"screen9": "Because there’s not enough insulin to let glucose in, Kara’s cells are starving so her body makes another type of fuel.  Her liver takes fatty acids from the body and breaks them down into fat and acids. Those acids are ketones. Kara’s body uses those ketones for emergency energy, but they can also make her sick.",
	"screen10": "The acidic ketones fill the bloodstream and make her stomach stop working right. She gets a belly ache and then starts vomiting.",
	"screen11": "Kara is very sick from all of the ketones in her body. She is drinking and peeing a lot, she feels weak and very thirsty, then she starts vomiting and breathing heavily. Kara has Diabetic Ketoacidosis (or DKA) from the acidic ketones.",
	"screen12": "",
	"screen12_checkketones": "If Kara feels any of these symptoms, even just one, she should check for ketones.",
	"screen12_call": "Kara has ketones and must call her doctor.",
	"screen12_waterinsulin": "The doctor tells Kara to drink lots of water and take insulin. Insulin stops her body from making any more ketones and water flushes the ketones out of her body.  The doctor will tell her if the ketones are high enough for her to go to the hospital.",
	"screen12_better": "Hooray! Kara feels better and now has her diabetes under control.",
	"screen13": "So when should I check for ketones? I should check for ketones when I have nausea, vomiting, or belly pain; when I have several high glucose readings; or when I am sick or have a fever.",
	"screen14": "How do I check for ketones? I can use a blood ketone meter or urine dipstick to check for ketones.",
	"screen15": "What should I do when I have ketones? I should take my insulin, drink water, and call my doctor.",
};

var storytext_es = {};

function change_storytext() {
	document.getSelection().removeAllRanges();

	$('#storytxt').removeClass("white");
	$('#storytxt').addClass("default");

	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var txt = exportRoot.getCurrentLabel();
	if (storytext[txt] == undefined) { return; }

	if (exportRoot.getCurrentLabel() == "screen12") { txt = "screen12_"+exportRoot.screen12.getCurrentLabel(); }

	$('#storytxt').text(storytext[txt]);

	storytextObj = new createjs.DOMElement("storytxt");
	storytextObj.x = ($('#content').outerWidth() - $('#storytxt').width()) / 2;

	var newH = $('#canvas').height()/3.2 + ($('#content').outerHeight() -16) / 2;
	storytextObj.y = newH;
	stage.addChild(storytextObj);
}

function read_storytext() {
	document.getSelection().removeAllRanges();

	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var id = exportRoot.getCurrentLabel();

	if (exportRoot.getCurrentLabel() == "screen12") { id = "screen12_"+exportRoot.screen12.getCurrentLabel(); }

	sndch.stop();
	playSound(id);
}

function changeSymbolToLang(sym) { sym.gotoAndStop(LANG); }