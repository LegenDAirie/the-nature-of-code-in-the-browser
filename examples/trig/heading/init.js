'use strict';

(function(){
 console.log('yayay');
 var GLB = window.GLB = window.GLB || {} ;
 GLB.canvas = document.getElementById('canvas');
 GLB.canvas.setAttribute("height", 500);
 GLB.canvas.setAttribute("widht", 500);
 GLB.context = GLB.canvas.getContext('2d');

 var game  = GLB.Game.create(); 
 game.start();

 })();
