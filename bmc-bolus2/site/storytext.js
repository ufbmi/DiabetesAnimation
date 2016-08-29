var storytext = {};

var storytext_en = {
    "screen1": "",
    "screen2": "Our friends Zach and Kara will help us see why insulin is so important throughout the day and when we eat. Zach doesn't have diabetes. Let's first check out how his body uses insulin.",
    "screen3": "Zach does not have diabetes. Between meals, Zach's pancreas slowly sends a little bit of insulin into his blood. This insulin helps stored up glucose from the liver get into cells for energy and keep the blood glucose in a healthy range throughout the day.",
    "screen4": "When Zach eats, the carbs from his food turn into glucose. His stomach sends all of this glucose into his blood stream and, at the same time, his pancreas sends enough insulin to match. The insulin takes some of the glucose into cells for energy and stores the rest in the liver. This keeps the glucose in a healthy range in the blood stream.",
    "screen5": "After Zach's stomach has emptied and the glucose has been used or stored, his liver starts slowly sending small amounts of glucose into his blood. His pancreas goes back to sending small amounts of insulin into the blood to keep his glucose level in the healthy range. Zach continues to have energy throughout the whole day.",
    "screen6": "Now let's see how our friend Kara's body gets and uses insulin because of her diabetes.",
    "screen7": "Kara has diabetes. Her pancreas does not work well to make the insulin she needs. Her liver still sends glucose, but without insulin, her body cannot use the glucose for energy so the level goes high.",
    "screen75": "When Kara eats, the carbs from her food turn into glucose. Her stomach sends all of that glucose into her blood stream. But there is no insulin to match up to the glucose for energy or store it for later. There is no insulin to keep her blood glucose in a healthy range so her blood glucose level goes very high.",
    "screen8": "Thankfully, Kara is still able to give her body insulin, just not from her pancreas. She gets a shot of long acting (basal) insulin so that during the day when she is not eating, a little bit of insulin is still sent into her blood stream. The insulin matches with the glucose from her liver and now her body can use the glucose for energy throughout the day!",
    "screen9": "During mealtimes, Kara's long acting (basal) insulin is not enough for all of the glucose that her stomach sends into the blood stream. She needs another type of insulin to help.",
    "screen10": "Kara needs to take short acting (bolus) insulin because she needs a lot of insulin very quickly! There's just enough insulin in her short acting (bolus) shot to match the glucose from Kara's food.",
    "screen11": "After Kara's stomach has emptied and the glucose has been used or stored, her liver starts slowly sending small amounts of glucose into her blood for energy. Kara's long acting (basal) insulin dose continues to send a small amount of insulin to match that glucose.",
};

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
    //abort for any undefined page or txt definitions from Flash
    if (exportRoot == undefined) { return; }
    if (exportRoot.getCurrentLabel() == undefined) { return; }

    var txt = exportRoot.getCurrentLabel();

    //custom passed in for multi-step screens 345 and 711
    if (custom) { txt = custom; }

    if (storytext[txt] == undefined) { return; }

    $('#storytxt').text(storytext[txt]);
}

function read_storytext(custom) {
    if (exportRoot == undefined) { return; }
    if (exportRoot.getCurrentLabel() == undefined) { return; }

    var id = exportRoot.getCurrentLabel();

    if (custom) { id = custom; }

    sndch.stop();
    playSound(id);
}

//accepts a movieclip symbol (passed from .xfl timeline)
//has passed movieclip change its own timeline to frame label defined by LANG ("en" or "es")
function changeSymbolToLang(sym) { sym.gotoAndStop(LANG); }
