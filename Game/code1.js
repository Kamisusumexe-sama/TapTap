gdjs.Info_47IntroCode = {};
gdjs.Info_47IntroCode.localVariables = [];
gdjs.Info_47IntroCode.GDInfo1Objects1= [];
gdjs.Info_47IntroCode.GDInfo1Objects2= [];
gdjs.Info_47IntroCode.GDInfo1Objects3= [];
gdjs.Info_47IntroCode.GDInfo2Objects1= [];
gdjs.Info_47IntroCode.GDInfo2Objects2= [];
gdjs.Info_47IntroCode.GDInfo2Objects3= [];
gdjs.Info_47IntroCode.GDTextSpanerObjects1= [];
gdjs.Info_47IntroCode.GDTextSpanerObjects2= [];
gdjs.Info_47IntroCode.GDTextSpanerObjects3= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects1= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects2= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects3= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects1= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects2= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects3= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects1= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects2= [];
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects3= [];
gdjs.Info_47IntroCode.GDNewSpriteObjects1= [];
gdjs.Info_47IntroCode.GDNewSpriteObjects2= [];
gdjs.Info_47IntroCode.GDNewSpriteObjects3= [];
gdjs.Info_47IntroCode.GDNewSprite2Objects1= [];
gdjs.Info_47IntroCode.GDNewSprite2Objects2= [];
gdjs.Info_47IntroCode.GDNewSprite2Objects3= [];
gdjs.Info_47IntroCode.GDNewSprite3Objects1= [];
gdjs.Info_47IntroCode.GDNewSprite3Objects2= [];
gdjs.Info_47IntroCode.GDNewSprite3Objects3= [];


gdjs.Info_47IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Info_47IntroCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Good Masks");
}}

}


};gdjs.Info_47IntroCode.asyncCallback16030604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Info_47IntroCode.localVariables);

{ //Subevents
gdjs.Info_47IntroCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Info_47IntroCode.localVariables.length = 0;
}
gdjs.Info_47IntroCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Info_47IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Info_47IntroCode.asyncCallback16030604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Info_47IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Info_47IntroCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


};gdjs.Info_47IntroCode.asyncCallback16033868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Info_47IntroCode.localVariables);

{ //Subevents
gdjs.Info_47IntroCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Info_47IntroCode.localVariables.length = 0;
}
gdjs.Info_47IntroCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Info_47IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Info_47IntroCode.asyncCallback16033868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Info_47IntroCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Info2"), gdjs.Info_47IntroCode.GDInfo2Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Good Masks");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Bad Masks");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "temp");
}{for(var i = 0, len = gdjs.Info_47IntroCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.Info_47IntroCode.GDInfo2Objects1[i].activateBehavior("AutoTyping", false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Masked Groove.mp3", 1, false, 80, 1);
}}

}


{


gdjs.Info_47IntroCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Info1"), gdjs.Info_47IntroCode.GDInfo1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Info_47IntroCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.Info_47IntroCode.GDInfo1Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Info_47IntroCode.GDInfo1Objects1[k] = gdjs.Info_47IntroCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.Info_47IntroCode.GDInfo1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Good Masks");
}
{ //Subevents
gdjs.Info_47IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info2"), gdjs.Info_47IntroCode.GDInfo2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Info_47IntroCode.GDInfo2Objects1.length;i<l;++i) {
    if ( gdjs.Info_47IntroCode.GDInfo2Objects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Info_47IntroCode.GDInfo2Objects1[k] = gdjs.Info_47IntroCode.GDInfo2Objects1[i];
        ++k;
    }
}
gdjs.Info_47IntroCode.GDInfo2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Info_47IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Info2"), gdjs.Info_47IntroCode.GDInfo2Objects1);
{for(var i = 0, len = gdjs.Info_47IntroCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.Info_47IntroCode.GDInfo2Objects1[i].activateBehavior("AutoTyping", true);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Bad Masks");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Good Masks");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "temp");
}
{ //Subevents
gdjs.Info_47IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info1"), gdjs.Info_47IntroCode.GDInfo1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Info_47IntroCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.Info_47IntroCode.GDInfo1Objects1[i].getBehavior("AutoTyping").HasJustTyped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Info_47IntroCode.GDInfo1Objects1[k] = gdjs.Info_47IntroCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.Info_47IntroCode.GDInfo1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16035628);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "keyboard-typing-4-292591.mp3", 2, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info2"), gdjs.Info_47IntroCode.GDInfo2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Info_47IntroCode.GDInfo2Objects1.length;i<l;++i) {
    if ( gdjs.Info_47IntroCode.GDInfo2Objects1[i].getBehavior("AutoTyping").HasJustTyped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Info_47IntroCode.GDInfo2Objects1[k] = gdjs.Info_47IntroCode.GDInfo2Objects1[i];
        ++k;
    }
}
gdjs.Info_47IntroCode.GDInfo2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16036532);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "keyboard-typing-4-292591.mp3", 2, false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Info_47IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Info_47IntroCode.GDInfo1Objects1.length = 0;
gdjs.Info_47IntroCode.GDInfo1Objects2.length = 0;
gdjs.Info_47IntroCode.GDInfo1Objects3.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects1.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects2.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects3.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects1.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects2.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects3.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects1.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects2.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects3.length = 0;

gdjs.Info_47IntroCode.eventsList6(runtimeScene);
gdjs.Info_47IntroCode.GDInfo1Objects1.length = 0;
gdjs.Info_47IntroCode.GDInfo1Objects2.length = 0;
gdjs.Info_47IntroCode.GDInfo1Objects3.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects1.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects2.length = 0;
gdjs.Info_47IntroCode.GDInfo2Objects3.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects1.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects2.length = 0;
gdjs.Info_47IntroCode.GDTextSpanerObjects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask1Objects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask2Objects3.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects1.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects2.length = 0;
gdjs.Info_47IntroCode.GDN_9595E_9595Mask3Objects3.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.Info_47IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.Info_47IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects1.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects2.length = 0;
gdjs.Info_47IntroCode.GDNewSprite3Objects3.length = 0;


return;

}

gdjs['Info_47IntroCode'] = gdjs.Info_47IntroCode;
