'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.canvas = document.getElementById('canvas');
  GLB.canvas.setAttribute('width', window.innerWidth);
  GLB.canvas.setAttribute('height', window.innerHeight);

  GLB.canvasContainer = document.getElementById('canvas-container');
  GLB.title = document.getElementById('title');

  GLB.context = GLB.canvas.getContext('2d');
})();
