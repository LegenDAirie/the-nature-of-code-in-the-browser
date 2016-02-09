'use strict';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

// var canvas = document.getElementById("canvas");
// canvas.setAttribute('height', HEIGHT);
// canvas.setAttribute('width', WIDTH);

var canvas2 = document.getElementById("canvas");
canvas2.setAttribute('height', HEIGHT);
canvas2.setAttribute('width', WIDTH);

var context = canvas.getContext('2d');
context.fillStyle = "white";
context.fill()

var runExamples = RunExamples.create()
runExamples.start()
