"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 20;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF6C0C";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  
  if(x + ballRadius > canvas.width || x - ballRadius < 0) {
    dx *= -1;
  }
  
  if(y + ballRadius > canvas.height || y - ballRadius < 0) {
    dy *= -1;
  }
  
  x += dx;
  y += dy;
}

setInterval(draw, 10);
