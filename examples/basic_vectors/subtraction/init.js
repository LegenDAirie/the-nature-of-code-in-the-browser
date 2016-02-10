'use strict';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var canvas = document.getElementById("canvas");
canvas.setAttribute('height', HEIGHT);
canvas.setAttribute('width', WIDTH);

var context = canvas.getContext('2d');
context.fillStyle = "white";
context.fill()

var vector_subtraction_example = Vector_subtraction_example.create()
vector_subtraction_example.start()
