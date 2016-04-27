'use strict';
(function(){
 var GLB = window.GLB = window.GLB || {} ;



 var GAME_PROTOTYPE = {
	start: function() {
		console.log('start');
		setInterval(this.update.bind(this), 1000/30);
	},
	update: function() {
		console.log('update');
	}

 };

 GLB.Game = {
	create: function(){
		var game = Object.create(GAME_PROTOTYPE);
		return game;
	}
 };

})();


