canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=grey;
ctx.lineWidth=4;
ctx.rect(150,143,438,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=blue;
ctx.lineWidth=4;
ctx.rect(250,210,40,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=black;
ctx.lineWidth=4;
ctx.rect(330,210,40,2*Math.PI);
ctx.stroke();