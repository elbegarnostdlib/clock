var canvas = document.getElementById("myCanvas");
var canvasContext = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var radius = width * 0.25;
var center  = {x: width / 2, y: height / 2};
var digitRectengle={width:10, height:10};

function drawLine(ctx, startX,startY,endX,endY,color,lineWidth){
    ctx.beginPath();   
    ctx.moveTo(startX, startY);  
    ctx.lineTo(endX, endY); 
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

function drawRect(ctx, color,startX,startY,width,height){
    ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.rect(startX, startY, width, height);
        ctx.fill();
        ctx.stroke();
}

function arrowDraw(center, angle, radius){
        
    var x = center.x+radius* Math.cos(angle);
    var y = center.y+radius* Math.sin(angle);
    drawLine(canvasContext,center.x,center.y,x,y, "black",2);
}

function clock(){
    for(var angle = 0; angle < 2 * Math.PI; angle+= Math.PI / 30){
        if (angle % (Math.PI / 6) === 0) continue;
        var x= center.x+radius* Math.cos(angle);
        var y= center.y+radius* Math.sin(angle);
        var endRadius = radius - 4;
        var endX = center.x + endRadius * Math.cos(angle);
        var endY = center.y + endRadius * Math.sin(angle);
        drawLine(canvasContext, endX, endY, x, y, "black", 1);
    
    }
    for(var angle = 0; angle < 2 * Math.PI; angle+= Math.PI / 6){
        var x= center.x+radius* Math.cos(angle);
        var y= center.y+radius* Math.sin(angle);
        canvasContext.strokeStyle = 'black';
        drawRect(canvasContext,"black",x - digitRectengle.width / 2, y - digitRectengle.height / 2, digitRectengle.width, digitRectengle.height);
       
    }
    drawRect(canvasContext,"black",width / 2- digitRectengle.width/2, height / 2- digitRectengle.height/2, digitRectengle.width, digitRectengle.height);
        
    
}
function draw(){
    canvasContext.clearRect(0, 0, width, height);
    
    // drawLine(canvasContext,0, height / 2,width, height / 2, "black", 0.1);
    // drawLine(canvasContext,width / 2, 0 ,width / 2, height, 'black', 0.1);

    clock();

    var seconds = new Date().getSeconds();
    var secondsArrowAngle = (seconds / 60) * 2 * Math.PI-Math.PI/2;
    arrowDraw(center, secondsArrowAngle, radius*0.8);
    var minute = new Date().getMinutes();
    var minutesArrowAngle = ((minute+ seconds/ 60)/60) * 2 * Math.PI-Math.PI/2;
    arrowDraw(center, minutesArrowAngle, radius * 0.75);
    var currentArrowHours = new Date().getHours();
    var hour = ((currentArrowHours+minute/60)/12 )* 2* Math.PI- Math.PI/2;
    arrowDraw(center, hour, radius * 0.65);
    requestAnimationFrame(draw);

}
draw();


