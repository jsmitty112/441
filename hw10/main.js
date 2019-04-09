class Object{
    constructor(x, y, w, h, color) {
        this.xcoord = x;
        this.ycoord = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    get x()
    {
        return this.xcoord;
    }

    get y()
    {
        return this.ycoord;
    }

    get width()
    {
        return this.w;
    }

    get height()
    {
        return this.h;
    }

}

let object1 = new Object(10, 10, 50, 50, "#800000");


let object2 = new Object(500, 300, 25, 25, "#97C800");


var canvas = document.getElementById("JCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");

let x_steps = 10;
let y_steps = 10;


setInterval(update, 800/400);
drawSquare();

function update()
{
    object2.xcoord -= x_steps;

    if (object2.xcoord <= 0 || object2.xcoord >= 525) {
        x_steps *= -1;
    }

    object2.ycoord -= y_steps;
    if (object2.ycoord <= 0 || object2.ycoord >= 425) {
        y_steps *= -1;
    }
    drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = object1.color;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    ctx2.fillStyle = object2.color;
    ctx2.fillRect(object2.x, object2.y, object2.width, object2.height);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
    }
    else if(actualLetter == "a")
    {
        moveLeft();
    }
    else if(actualLetter == "s")
    {
        moveRight();
    }
    else if(actualLetter == "d")
    {
        moveDown();
    }
    if (hasCollided(object1, object2))
    {
        object2.color = "C0C0C0";
        object2.w *= 2;
        object2.h *= 2;
        var bg_color = document.getElementById('background');
        bg_color.style.color = "#800000";
    }


    drawSquare();
}
