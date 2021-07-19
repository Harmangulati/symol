canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.rect(150,143,438,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(310,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(410,240,40,0,2*Math.PI);
ctx.stroke();