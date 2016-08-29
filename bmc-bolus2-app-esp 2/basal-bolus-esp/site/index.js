var canvas, stage, exportRoot;
var LANG = 'en';
var urlParams = {};

function forceES() {
    LANG = 'es';
    init();
}

function init() {
    storytext = (LANG == 'en') ? storytext_en : storytext_es;

    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images || {};
    sounds = [];

    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);

    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", loadSounds);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) { if (evt.item.type == "image") { images[evt.item.id] = evt.result; } }

function loadSounds(){
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
    createjs.Sound.registerSound("snd_"+LANG+"/screen7.m4a", "screen7");
    createjs.Sound.registerSound("snd_"+LANG+"/screen75.m4a", "screen75");
    createjs.Sound.registerSound("snd_"+LANG+"/screen8.m4a", "screen8");
    createjs.Sound.registerSound("snd_"+LANG+"/screen9.m4a", "screen9");
    createjs.Sound.registerSound("snd_"+LANG+"/screen10.m4a", "screen10");
    createjs.Sound.registerSound("snd_"+LANG+"/screen11.m4a", "screen11");

    createjs.Sound.registerSound("snd_sfx/snd_eating.m4a", "snd_eating");
    createjs.Sound.registerSound("snd_sfx/snd_pancreastries.m4a", "snd_pancreastries");
    createjs.Sound.registerSound("snd_sfx/snd_glucoseappear.m4a", "snd_glucoseappear");
    createjs.Sound.registerSound("snd_sfx/snd_gimeet.m4a", "snd_gimeet");
    createjs.Sound.registerSound("snd_sfx/snd_insulininjection.m4a", "snd_insulininjection");
    createjs.Sound.registerSound("snd_sfx/snd_swoosh.m4a", "snd_swoosh");
    createjs.Sound.registerSound("snd_sfx/snd_lookinside.m4a", "snd_lookinside");
    createjs.Sound.registerSound("snd_sfx/snd_insulinappear.m4a", "snd_insulinappear");
    createjs.Sound.registerSound("snd_sfx/snd_buttonclick.m4a", "sfx_btnclick");

    sndQ.load();
}

function sndQ_handleFileLoad(event) { sounds[event.item.id] = event.result; }

function sndQ_handleComplete(e) { loadingAllDone(); }

function loadingAllDone() {
    exportRoot = new lib.basilBolus();

    stage = new createjs.Stage(canvas);

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
    createjs.Tween.get(obj, {loop:true}).to({
    	scaleX: obj.scaleX*1.1,
		scaleY: obj.scaleY*1.1
		}, 250, createjs.Ease.none).wait(250).to({
			scaleX: obj.scaleX,
			scaleY: obj.scaleY
			}, 250, createjs.Ease.none).wait(250);
}

function end_pulseObj(obj) {
    createjs.Tween.removeTweens(obj);
    obj.scaleX = obj.startSX || 1;
    obj.scaleY = obj.startSY || 1;
}