'use strict';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var canvas = document.getElementById("canvas");
canvas.setAttribute('height', HEIGHT);
canvas.setAttribute('width', WIDTH);

var context = canvas.getContext('2d');
context.fillStyle = "white";
context.fill()

var starField = StarField.create()
starField.start()
