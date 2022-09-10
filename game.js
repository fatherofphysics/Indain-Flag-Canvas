const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

/* bg color */

/* credit to Vedant Kanoujia */
ctx.font = '15px sans-serif';
ctx.fillStyle = '#155e75';
ctx.fillText("Made with Love", 120, 30);
ctx.fillText ("Vedant Kanoujia!", 120, 45);


/* INDIAN FLAG  */

ctx.lineWidth = '3';



/* 1st box */
ctx.strokeStyle = "black";
ctx.strokeRect(180,90,120,30);

ctx.fillStyle = "#ea580c";
ctx.fillRect(180,90,120,30);

/* 2nd box */
ctx.strokeStyle = "black";
ctx.strokeRect(180,120,120,30);

ctx.fillStyle = "#fff";
ctx.fillRect(180,120,120,30);

/* chakra */
ctx.beginPath();
ctx.strokeStyle = "#1d4ed8";
ctx.arc( 240, 134.3, 13.5, 0, 2 * Math.PI, false);
ctx.stroke();

/* chakra sticks */
/* vertical */
ctx.beginPath();
ctx.strokeStyle = "#1d4ed8";
ctx.moveTo(240,120);
ctx.lineTo(240,150);
ctx.stroke();

/* horizontal */
ctx.beginPath();
ctx.strokeStyle = "#1d4ed8";
ctx.moveTo(225,135);
ctx.lineTo(255,135);
ctx.stroke();

/* top left diagonal */
ctx.beginPath();
ctx.strokeStyle = "#1d4ed8";
ctx.moveTo(230,125);
ctx.lineTo(249,143);
ctx.stroke();

/* top right diagonal */
ctx.beginPath();
ctx.strokeStyle = "#1d4ed8";
ctx.moveTo(250,125);
ctx.lineTo(230,143);
ctx.stroke();


/* end of chakra sticks */

/* 3rd box */
ctx.strokeStyle = "black";
ctx.strokeRect(180,150,120,30);

ctx.fillStyle = "#16a34a";
ctx.fillRect(180,150,120,30);



/* stick */
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(180,180);
ctx.lineTo(180,360);
ctx.stroke();


/* stage */

/* 3rd stage */
ctx.strokeStyle = "black";
ctx.strokeRect(150,315,60,15);

ctx.fillStyle = "#b45309";
ctx.fillRect(150,315,60,15);

/* 2nd stage */
ctx.stokeStyle = "black";
ctx.strokeRect(125,330,110,15);

ctx.fillStyle = "#b45309";
ctx.fillRect(125,330,110,15);

/* 1st stage */
ctx.strokeStyle = "black";
ctx.strokeRect(90,345,180,15);
 
ctx.fillStyle = "#b45309";
ctx.fillRect(90,345,180,15);



