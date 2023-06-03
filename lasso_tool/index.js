var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "red";
ctx.lineWidth = 2;


var isDrawing = false;
var startX, startY, endX, endY;

canvas.addEventListener("mousedown", function(e) {
    isDrawing = true;
    startX = e.clientX - canvas.offsetLeft;
    startY = e.clientY - canvas.offsetTop;
  });
  
  canvas.addEventListener("mousemove", function(e) {
    if (isDrawing) {
      endX = e.clientX - canvas.offsetLeft;
      endY = e.clientY - canvas.offsetTop;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      startX = endX;
      startY = endY;
    }
  });
  
  canvas.addEventListener("mouseup", function(e) {
    isDrawing = false;
  });