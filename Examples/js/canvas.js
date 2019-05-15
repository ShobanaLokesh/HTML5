var canvasRef=document.getElementById("mycanvas")
var ctx= canvasRef.getContext("2d")
var x= 20
var y = 20

//draw a line
ctx.moveTo(0,0)
ctx.lineTo(600,600)
ctx.stroke()

//Write a Text
ctx.font="45px serif"
ctx.strokeText("hello Canvas",20,280)

//Fill a Rectangle
ctx.fillStyle ="rgba(200,0,0,0.5)"
ctx.fillRect(50,50,100,100)

ctx.fillStyle ="rgba(0,200,0,0.5)"
ctx.fillRect(75,75,100,150)

//draw a Circle
ctx.beginPath()
ctx.fillStyle = "Orange"; 
ctx.arc(300,150,50,0,Math.PI*2,true)
ctx.stroke()
ctx.fill();

//draw a Rectangle
ctx.lineWidth=4
ctx.strokeStyle= "Red"
ctx.strokeRect(190,100,50,50)

//Animate a Text
window.requestAnimationFrame(animateText())
var animateText = function()
    {
        ctx.font="45px serif"
        ctx.strokeText("hello Canvas",x,y)
        y++
        ctx.restore()
        window.requestAnimationFrame(animateText())
    }

