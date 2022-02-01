var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//The Small Ball's
var ball = createSprite(10,10,10,10);
var ball2 = createSprite(390,10,10,10);
var ball3 = createSprite(10,390,10,10);
var ball4 = createSprite(390,390,10,10);

ball.velocityX = 2;
ball.velocityY = 3;

ball2.velocityX = -2;
ball2.velocityY = 3;

ball3.velocityX = 2;
ball3.velocityY = -3;

ball4.velocityX = -2;
ball4.velocityY = -3;


ball.shapeColor = "red";

ball2.shapeColor = "yellow";

ball3.shapeColor = "blue";

ball4.shapeColor = "violet";



//The bigger one's

var bigball = createSprite(35,35,20,20);

var bigball2 = createSprite(365,35,20,20);

var bigball3 = createSprite(35,365,20,20);

var bigball4 = createSprite(365,365,20,20);

bigball.velocityX=3;
bigball.velocityY=4;

bigball2.velocityX=-3;
bigball2.velocityY=4;

bigball3.velocityX=3;
bigball3.velocityY=-4;

bigball4.velocityX=-3;
bigball4.velocityY=-4;



bigball.shapeColor = "violet";

bigball2.shapeColor = "red";

bigball3.shapeColor = "yellow";

bigball4.shapeColor = "blue";




function draw() {
  
  background("grey");
  
  
  createEdgeSprites();
  
  ball.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  bigball.bounceOff(edges);
  bigball2.bounceOff(edges);
  bigball3.bounceOff(edges);
  bigball4.bounceOff(edges);
  drawSprites();
  
  ball.bounce(ball2);
  ball.bounce(ball3);
  ball.bounce(ball4);
  
  ball2.bounce(ball3);
  ball2.bounce(ball4);
  
  ball3.bounce(ball4);
  
  
  bigball.bounce(bigball2);
  bigball.bounce(bigball3);
  bigball.bounce(bigball4);
  
  bigball2.bounce(bigball3);
  bigball2.bounce(bigball4);
  
  bigball3.bounce(bigball4);
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
