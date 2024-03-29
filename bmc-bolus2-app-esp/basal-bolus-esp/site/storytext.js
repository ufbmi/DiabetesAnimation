var storytext = {};

var storytext_en = {};

var storytext_es = {
    "screen1": "",
    "screen2": "Nuestros amigos Zach y Kara nos ayudarán a ver por qué la insulina es tan importante durante todo el día y cuando comemos. Zach no tiene diabetes. Primero vamos a ver cómo su cuerpo utiliza la insulina.",
    "screen3": "Zach no tiene diabetes. Entre las comidas, el páncreas de Zach lentamente envía un poco de insulina en la sangre. Esta insulina ayuda a la glucosa guardada en el hígado llegue a las células para obtener energía y mantener la glucosa en la sangre en un nivel saludable durante todo el día.",
    "screen4": "Cuando Zach come, los carbohidratos de su comida se convierten en glucosa. Su estómago envía todo esta glucosa a su sangre y, al mismo tiempo, su páncreas se envía suficiente insulina para igualar. La insulina lleva parte de la glucosa a las células para obtener energía y guardar el resto en el hígado. Esto mantiene la glucosa en un nivel saludable en la sangre.",
    "screen5": "Después que el estómago de Zach se ha vaciado y la glucosa se ha utilizado o guardado, su hígado comienza a enviar lentamente pequeñas cantidades de glucosa a su sangre. También, su páncreas vuelve a enviar pequeñas cantidades de insulina a la sangre para mantener su nivel saludable. Zach sigue teniendo energía durante todo el día.",
    "screen6": "Ahora vamos a ver cómo el cuerpo de Kara recibe y utiliza la insulina a causa de su diabetes.",
    "screen7": "Kara tiene diabetes. Su páncreas no funciona bien para hacer la insulina que necesita. Su hígado todavía envía la glucosa, pero sin insulina, su cuerpo no puede utilizar la glucosa para energía, por eso los niveles de glucosa están alta.",
    "screen75": "Cuando Kara come, los carbohidratos de su comida se convierten en glucosa. Su estómago envía toda esta glucosa a su sangre. Pero no hay insulina que se ponga junta con la glucosa para obtener energía o guardarla para más adelante. No hay insulina para mantener la glucosa en su sangre en un nivel saludable y por eso el nivel de glucosa sube muy alta.",
    "screen8": "Afortunadamente, Kara todavía puede darle la insulina a su cuerpo, pero no de su páncreas. Ella recibe una inyección de insulina de acción larga (basal) para que durante el día cuando ella no está comiendo, un poco de insulina todavía está enviada a su sangre. ¡La insulina coincide con la glucosa de su hígado y ahora su cuerpo pueda utilizar la glucosa para obtener energía durante todo el día!",
    "screen9": "Durante las horas de comida, la insulina de acción larga (basal) de Kara no es suficiente para toda la glucosa que su estómago envía a la sangre. Ella necesita otro tipo de insulina para ayudarla.",
    "screen10": "¡Kara tiene que tomar la insulina de acción corta (bolus) porque necesita una cierta cantidad de insulina rápidamente! Su inyección, tiene la cantidad suficiente para cubrir la glucosa de su comida.",
    "screen11": "Después que el estómago de Kara se ha vaciado y la glucosa se ha utilizada o guardado, su hígado comienza a enviar lentamente pequeñas cantidades de glucosa a la sangre para coger energía. Los dosis de insulina de acción prolongada (basal) de Kara continúa enviando una pequeña cantidad de insulina para que coincida con la glucosa.",
};

function change_storytext(custom) {
    document.getSelection().removeAllRanges();

    $('#storytxt').removeClass("white");
    $('#storytxt').addClass("default");

    if (exportRoot == undefined) { return; }
    if (exportRoot.getCurrentLabel() == undefined) { return; }

    var txt = exportRoot.getCurrentLabel();

    if (custom) { txt = custom; }

    if (storytext[txt] == undefined) { return; }

    $('#storytxt').text(storytext[txt]);

    storytextObj = new createjs.DOMElement("storytxt");
    storytextObj.x = ($('#content').outerWidth()-$('#storytxt').width())/2;

    var newH =  $('#canvas').height()/3.2 +($('#content').outerHeight()-16)/2;
    storytextObj.y = newH;
    stage.addChild(storytextObj);
}

function read_storytext(custom) {
    document.getSelection().removeAllRanges();

    if (exportRoot == undefined) { return; }

    if (exportRoot.getCurrentLabel() == undefined) { return; }

    var id = exportRoot.getCurrentLabel();

    if (custom) { id = custom; }

    sndch.stop();
    playSound(id);
}

function changeSymbolToLang(sym) { sym.gotoAndStop(LANG); }