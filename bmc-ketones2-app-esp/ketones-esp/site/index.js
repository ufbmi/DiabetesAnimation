var canvas, stage, exportRoot;
var LANG = 'es';

function init() {
    storytext = storytext_es;

    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images||{};
    sounds = [];

    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);

    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", loadSounds);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) { if (evt.item.type == "image") { images[evt.item.id] = evt.result; } }

function loadSounds() {
    sndch = createjs.Sound;
    sndch_fx = createjs.Sound;

    sndQ = new createjs.LoadQueue(false);
    sndQ.addEventListener("complete", sndQ_handleComplete);
    sndQ.addEventListener("fileload", sndQ_handleFileLoad);

    createjs.Sound.registerSound("snd_"+LANG+"/screen1.m4a", "screen1");
    createjs.Sound.registerSound("snd_"+LANG+"/screen2.m4a", "screen2");
    createjs.Sound.registerSound("snd_"+LANG+"/screen3.m4a", "screen3");
    createjs.Sound.registerSound("snd_"+LANG+"/screen4.m4a", "screen4");
    createjs.Sound.registerSound("snd_"+LANG+"/screen5.m4a", "screen5");
    createjs.Sound.registerSound("snd_"+LANG+"/screen6.m4a", "screen6");
    createjs.Sound.registerSound("snd_"+LANG+"/screen8.m4a", "screen8");
    createjs.Sound.registerSound("snd_"+LANG+"/screen9.m4a", "screen9");
    createjs.Sound.registerSound("snd_"+LANG+"/screen10.m4a", "screen10");
    createjs.Sound.registerSound("snd_"+LANG+"/screen11.m4a", "screen11");
    createjs.Sound.registerSound("snd_"+LANG+"/screen12_better.m4a", "screen12_better");
    createjs.Sound.registerSound("snd_"+LANG+"/screen12_call.m4a", "screen12_call");
    createjs.Sound.registerSound("snd_"+LANG+"/screen12_checkketones.m4a", "screen12_checkketones");
    createjs.Sound.registerSound("snd_"+LANG+"/screen12_waterinsulin.m4a", "screen12_waterinsulin");
    createjs.Sound.registerSound("snd_"+LANG+"/screen13.m4a", "screen13");
    createjs.Sound.registerSound("snd_"+LANG+"/screen14.m4a", "screen14");
    createjs.Sound.registerSound("snd_"+LANG+"/screen15.m4a", "screen15");

    createjs.Sound.registerSound("snd_sfx/sfx_btnclick.m4a", "sfx_btnclick");
    createjs.Sound.registerSound("snd_sfx/sfx_pancspitout.m4a", "sfx_pancspitout");
    createjs.Sound.registerSound("snd_sfx/sfx_cellshrink.m4a", "sfx_cellshrink");
    createjs.Sound.registerSound("snd_sfx/sfx_cellmunching.m4a", "sfx_cellmunching");
    createjs.Sound.registerSound("snd_sfx/bubblepop.m4a", "bubblepop");
    createjs.Sound.registerSound("snd_sfx/calldoctor.m4a", "calldoctor");
    createjs.Sound.registerSound("snd_sfx/click6.m4a", "click6");
    createjs.Sound.registerSound("snd_sfx/drinkwater.m4a", "drinkwater");
    createjs.Sound.registerSound("snd_sfx/g_appear.m4a", "g_appear");
    createjs.Sound.registerSound("snd_sfx/k_appear.m4a", "k_appear");
    createjs.Sound.registerSound("snd_sfx/pancreas1.m4a", "pancreas1");
    createjs.Sound.registerSound("snd_sfx/pancreas_unhealthy.m4a", "pancreas_unhealthy");
    createjs.Sound.registerSound("snd_sfx/screen_opening.m4a", "screen_opening");
    createjs.Sound.registerSound("snd_sfx/squish2.m4a", "squish2");
    createjs.Sound.registerSound("snd_sfx/swoosh2.m4a", "swoosh2");
    createjs.Sound.registerSound("snd_sfx/swoosh3.m4a", "swoosh3");
    createjs.Sound.registerSound("snd_sfx/swoosh4.m4a", "swoosh4");
    createjs.Sound.registerSound("snd_sfx/urinate.m4a", "urinate");
    createjs.Sound.registerSound("snd_sfx/vomit2.m4a", "vomit2");
    createjs.Sound.registerSound("snd_sfx/snd_weakness.m4a", "snd_weakness");
    createjs.Sound.registerSound("snd_sfx/snd_dehydration.m4a", "snd_dehydration");
    createjs.Sound.registerSound("snd_sfx/snd_heavybreathing.m4a", "snd_heavybreathing");

    sndQ.load();
}

function sndQ_handleFileLoad(event) { sounds[event.item.id]  = event.result; }

function sndQ_handleComplete(e) { loadingAllDone(); }

function loadingAllDone() {
    exportRoot = new lib.ketones_www();

    stage = new createjs.Stage(canvas);

    //stage.enableMouseOver(20);
    stage.mouseMoveOutside = true;

    isTouch = createjs.Touch.isSupported();

    createjs.Touch.enable(stage, true, false);

    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    stage.addEventListener("mousedown", stage_mousedown);

    $('#storytxt').on("mousedown", storytxt_mousedown);
}

function storytxt_mousedown(e) {
    $('#storytxt').removeClass("white");
    $('#storytxt').addClass("default");
}

function stage_mousedown(e) {
    $('#storytxt').removeClass("default");
    $('#storytxt').addClass("white");
}

function playSound(id, loop) { sndch = createjs.Sound.play(id); }

function stopSound() { sndch.stop(); }

function playSfx(id) { sndch_fx = createjs.Sound.play(id, {volume:0.4}); }

function stopSfx() { sndch_fx.stop(); }

function addHandHover(target) {
// target.addEventListener("mouseover", cursorPointer);
// target.addEventListener("rollover", cursorPointer);
// target.addEventListener("mouseout", cursorDefault);
// target.addEventListener("rollout", cursorDefault);
}

function removeHandHover(target) {
// target.removeEventListener("mouseover", cursorPointer);
// target.removeEventListener("rollover", cursorPointer);
// target.removeEventListener("mouseout", cursorDefault);
// target.removeEventListener("rollout", cursorDefault);
}

function cursorPointer(e) {
//document.body.style.cursor='pointer';
}

function cursorDefault(e) {
//document.body.style.cursor='default';
}

function begin_pulseObj(obj) {
    obj.startSX = obj.scaleX;
    obj.startSY = obj.scaleY;

    createjs.Tween.get(obj, {loop:true})
    .to({
        scaleX: obj.scaleX*1.1,
        scaleY: obj.scaleY*1.1,
    }, 250, createjs.Ease.none)
    .wait(250)
    .to({
        scaleX: obj.scaleX,
        scaleY: obj.scaleY,
    }, 250, createjs.Ease.none)
    .wait(250);
}

function end_pulseObj(obj) {
    createjs.Tween.removeTweens(obj);
    obj.scaleX = obj.startSX || 1;
    obj.scaleY = obj.startSY || 1;
}