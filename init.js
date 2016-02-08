'use strict';

var WIDTH = window.innerWidth / 2;
var HEIGHT = window.innerHeight / 2;

var canvas = document.getElementById("canvas");
canvas.setAttribute('height', HEIGHT);
canvas.setAttribute('width', WIDTH);

var context = canvas.getContext('2d');
context.fillStyle = "white";
context.fill()

var runExamples = RunExamples.create()
runExamples.start()
