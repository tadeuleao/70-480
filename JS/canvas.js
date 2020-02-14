
//primeiro
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(100,50);
ctx.lineTo(150,100);
ctx.lineTo(150,150);
ctx.lineTo(300,200);
ctx.stroke();

//segundo
var c = document.getElementById("Canvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150 , 100,40 , 0 ,2 * Math.PI);
ctx.stroke();

//terceiro
var c = document.getElementById("Canvas3");
var ctx = c.getContext("2d");
ctx.font='30px sans-serif';
ctx.fillText("Tadeu leao", 50, 100, 200);

//quarto
var c = document.getElementById("Canvas4");
var ctx = c.getContext("2d");
ctx.font='30px sans-serif';
ctx.strokeText("Tadeu leao", 50, 100);

//quinto
var c = document.getElementById("Canvas5");
var ctx = c.getContext("2d");
ctx.font='10px sans-serif';
ctx.moveTo(0,0);
ctx.strokeText("0X , 50Y", 0, 50);
ctx.lineTo(0,50);
ctx.lineTo(50,50);
ctx.strokeText("50X , 100Y", 50, 100);
ctx.lineTo(50,100);
ctx.lineTo(100,100);
ctx.strokeText("100X , 150Y", 120, 150);
ctx.lineTo(100,150);
ctx.lineTo(200,150);
ctx.strokeText("200X , 100Y", 200, 100);
ctx.lineTo(200,100);
ctx.lineTo(250,100);
ctx.strokeText("250X , 50Y", 250, 50);
ctx.lineTo(250,50);
ctx.lineTo(300,50);
ctx.lineTo(300,0);
ctx.stroke();

//sexto
var c = document.getElementById("Canvas6");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150 , 100,50 , 0 ,2 * Math.PI);
ctx.moveTo(40,100);
ctx.lineTo(150, 180);
ctx.lineTo(260, 100);
ctx.lineTo(150, 20);
ctx.lineTo(40, 100);
ctx.stroke();