var storytext = {};

var storytext_en = {};

var storytext_es = {
	"screen1": "",
	"screen2": "Nuestros cuerpos utilizan insulina para obtener la glucosa necesaria en las células para   energía. Cuando nuestros cuerpos no producen suficiente insulina, la glucosa no puede entrar en las células y la glucosa se acumula en la sangre. Como otro tipo de energía, el cuerpo produce cetonas. Pero demasiadas cetonas pueden enfermarnos y causar debilidad, sed, vómitos, orinar con frecuencia, y con respiración pesada.",
	"screen3": "Nuestros amigos Zach y Kara nos ayudarán a ver dónde vienen las cetonas y qué hacer cuando las tenemos. Zach no tiene diabetes, así que vamos a primero ver cómo funciona su cuerpo.",
	"screen4": "Zach no tiene diabetes. Su páncreas produce insulina, que permite que la glucosa entre en las células para la energía. La insulina es como una llave que abre la células y deja que la glucosa entre.",
	"screen5": "Ahora vamos a ver lo que es diferente en la diabetes.",
	"screen6": "Kara tiene diabetes. Su páncreas no produce suficiente insulina para mover la glucosa de su sangre en sus células. Cuando la glucosa no puede entrar, las células se sienten débil y lo mismo ocurre con Kara.",
	"screen7":"",
	"screen8": "La sangre de Kara se pone tan llena de glucosa que el cuerpo intenta deshacerse de ella a través de sus riñones. Pero, como la glucosa pasa a través de los riñones, se trae agua con ella. Esto hace que Kara tenga que orinar frecuentemente. Con tanta orina, Kara tiene mucha sed.",
	"screen9": "Debido a que no hay suficiente insulina para que la glucosa entre las células de Kara, las células se mueren de hambre por eso su cuerpo hace otro tipo de energía. Su hígado toma ácidos grasosos del cuerpo y las descompone a grasa y ácidos. Estos ácidos son las cetonas. El cuerpo de Kara utiliza esas cetonas para la energía de emergencia, pero también puede enfermarla.",
	"screen10": "Las cetonas ácidas llenan su sangre y hacen que su estómago no funcione bien. Ella tiene un dolor de estómago y luego empieza a vomitar.",
	"screen11": "Kara está muy enferma por todas las cetonas en su cuerpo. Ella esta tomando y orinando mucho, se siente débil y tiene mucha sed, entonces ella comienza a vomitar y respirar con dificultad. Kara tiene cetoacidosis diabética (o DKA) de las cetonas ácidas.",
	"screen12": "",
	"screen12_checkketones": "Si Kara siente alguno de eso síntomas, aunque sólo sea uno, debería chequear si tiene  cetonas.",
	"screen12_call": "Kara tiene cetonas y debe llamar a su doctora.",
	"screen12_waterinsulin": "La doctora le dice a Kara que tome mucha agua y tome su insulina. La insulina para su cuerpo de hacer más cetonas y el agua la limpia. La doctora dice si las cetonas están suficientemente altas para que ella vaya al hospital.",
	"screen12_better": "¡Chévere! Kara se siente mejor y ahora tiene su diabetes bajo control.",
	"screen13": "Cuando debería chequear si tengo cetonas? Debo chequear cuando tengo náuseas, vómitos o dolor de estómago; cuando tengo varias lecturas altas de glucosa; o cuando estoy enfermo o tengo fiebre.",
	"screen14": "¿Cómo chequeo por cetonas? Yo puedo usar la maquina de sangre de cetonas o una tira reactiva de orina para chequear si tengo cetonas.",
	"screen15": "¿Qué debo hacer cuando tengo cetonas? Yo debo tomar mi insulina, tomar agua y llamar a mi doctora."
};

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

	storytextObj = new createjs.DOMElement( "storytxt" );
	storytextObj.x = ($('#content').outerWidth() - $('#storytxt').width()) / 2;

	var newH =  $('#canvas').height()/3.2 + ($('#content').outerHeight() -16) / 2;
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