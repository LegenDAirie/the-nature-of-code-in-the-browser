'use strict';
(function(){
 var GLB = window.GLB = window.GLB || {} ;



 var GAME_PROTOTYPE = {
	start: function() {
		console.log('start');
    GLB.canvas.addEventListener('mousemove', this.cursor.updateMouse.bind(this.cursor))
		this.animate();
	},

  draw: function() {

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
    // console.log("update")

  }

 };

 GLB.Game = {
	create: function(){
		var game = Object.create(GAME_PROTOTYPE);
    game.cursor = GLB.Cursor.create()
    
		return game;
	}
 };

})();
