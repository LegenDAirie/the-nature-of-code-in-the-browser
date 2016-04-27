'use strict';

(function(){
 console.log('yayay');
 var GLB = window.GLB = window.GLB || {} ;
 GLB.canvas = document.getElementById('canvas');
 GLB.canvas.setAttribute("height", window.innerHeight);
 GLB.canvas.setAttribute("width", window.innerWidth);
 GLB.context = GLB.canvas.getContext('2d');

 var game  = GLB.Game.create();
 game.start();

 })();
