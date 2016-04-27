'use strict';
(function(){
 var GLB = window.GLB = window.GLB || {} ;



 var GAME_PROTOTYPE = {
	start: function() {
		console.log('start');
    GLB.canvas.addEventListener('mousemove', this.cursor.updateMouse.bind(this.cursor))
		this.animate();
	},

	animate: function() {
		var self = this;
		// console.log('animate');
    self.update();

		setTimeout(function() {
			window.requestAnimationFrame(self.animate.bind(self));
		}, 1000/30);
	},

  update: function() {
     console.log("update")
    this.move();
    this.draw();
  },

  move: function() {
    var self = this
    _.each(this.vehicles, function(value){value.move(self.cursor)})
  },

  draw: function() {
    _.each(this.vehicles, function(value){value.draw()})
  }
 };

 GLB.Game = {
	create: function(){
		var game = Object.create(GAME_PROTOTYPE);
    game.cursor = GLB.Cursor.create()
    game.vehicles = []

    var vehicleMax = 10;

    for ( var i = 1; i < vehicleMax; i++ ) {
      var vehicle = GLB.Vehicle.create()
      game.vehicles.push(vehicle);
    }

		return game;
	}
 };

})();
