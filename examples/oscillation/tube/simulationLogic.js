'use strict';

(function(){
  let GLB = window.GLB = window.GLB || {};

  let middleX = GLB.canvas.width / 2;
  let middleY = GLB.canvas.height / 2;

  let angle = 0;
  let angleVelocity = 0.01;
  let amplitude = (GLB.canvas.height / 2) - 15;

  const ellipses = [];

  const radius = 30;
  const numberOfBallsOnScreen = GLB.canvas.width / (radius / 4);

  let locationX = 0;

  _.times(numberOfBallsOnScreen, function() {
    let ellipse = GLB.Ellipse.create({
      x: locationX,
      y: amplitude * Math.sin(angle),
      majorAxis: 30,
      minorAxis: 30,
      color: {r: 255, g: 127, b: 127, a: 0.2}
     });

    ellipse.startingAngle = angle;

    ellipses.push(ellipse);
    locationX = locationX + (radius / 4);
    angle = angle + 1;
  });

  GLB.simulationLogic = {

    init: function() {
      window.addEventListener('resize', function() {
        amplitude = (GLB.canvas.height / 2) - 15;
      });
    },

    update: function() {

      _.each(ellipses, function(ellipse){
        ellipse.location.y = amplitude * Math.sin(ellipse.startingAngle + angle) + GLB.canvas.height / 2;
        ellipse.majorAxis = Math.abs(Math.cos(ellipse.startingAngle + angle) * 30)

        if(Math.cos(ellipse.startingAngle + angle) > 0) {
          ellipse.color = "rgba(255, 127, 127, 0.2)";
        } else {
          ellipse.color = "rgba(1, 1, 1, 0.1)";
        }
      });

      angle = angle + angleVelocity;

    },

    draw: function() {
      _.each(ellipses, function(ellipse){
        ellipse.draw();
      });
    },
  };
})();
