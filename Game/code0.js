gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1= [];
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects2= [];
gdjs.MainMenuCode.GDMaskObjects1= [];
gdjs.MainMenuCode.GDMaskObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDNewSpriteuyObjects1= [];
gdjs.MainMenuCode.GDNewSpriteuyObjects2= [];
gdjs.MainMenuCode.GDNewSprite2yyyObjects1= [];
gdjs.MainMenuCode.GDNewSprite2yyyObjects2= [];
gdjs.MainMenuCode.GDNewSprite3yyyObjects1= [];
gdjs.MainMenuCode.GDNewSprite3yyyObjects2= [];
gdjs.MainMenuCode.GDYellowButtonObjects1= [];
gdjs.MainMenuCode.GDYellowButtonObjects2= [];
gdjs.MainMenuCode.GDInfoObjects1= [];
gdjs.MainMenuCode.GDInfoObjects2= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects1= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects2= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects1= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects2= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects1= [];
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewSprite3Objects1= [];
gdjs.MainMenuCode.GDNewSprite3Objects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapTaskMaskLogo"), gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Masked Groove.mp3", 1, true, 70, 1);
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.MainMenuCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDYellowButtonObjects1[k] = gdjs.MainMenuCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info/Intro", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1.length = 0;
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects2.length = 0;
gdjs.MainMenuCode.GDMaskObjects1.length = 0;
gdjs.MainMenuCode.GDMaskObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteuyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteuyObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2yyyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2yyyObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3yyyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3yyyObjects2.length = 0;
gdjs.MainMenuCode.GDYellowButtonObjects1.length = 0;
gdjs.MainMenuCode.GDYellowButtonObjects2.length = 0;
gdjs.MainMenuCode.GDInfoObjects1.length = 0;
gdjs.MainMenuCode.GDInfoObjects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;

gdjs.MainMenuCode.eventsList1(runtimeScene);
gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects1.length = 0;
gdjs.MainMenuCode.GDTapTaskMaskLogoObjects2.length = 0;
gdjs.MainMenuCode.GDMaskObjects1.length = 0;
gdjs.MainMenuCode.GDMaskObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteuyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteuyObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2yyyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2yyyObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3yyyObjects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3yyyObjects2.length = 0;
gdjs.MainMenuCode.GDYellowButtonObjects1.length = 0;
gdjs.MainMenuCode.GDYellowButtonObjects2.length = 0;
gdjs.MainMenuCode.GDInfoObjects1.length = 0;
gdjs.MainMenuCode.GDInfoObjects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask1Objects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask2Objects2.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects1.length = 0;
gdjs.MainMenuCode.GDN_9595E_9595Mask3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
