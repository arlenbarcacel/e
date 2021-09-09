var canvas = new fabric.Canvas('myCanvas');
var player_x = 10;
var player_y = 10;
var blockimgwidth = 30;
var blockimgheight = 30;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
var blockimgobject = "";

function newimg(getimg) {
    fabric.Image.fromURL(getimg, function (Img) {
        blockimgobject = Img;
        blockimgobject.scaleToWidth(blockimgwidth);
        blockimgobject.scaleToHeight(blockimgheight);
        blockimgobject.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blockimgobject);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        console.log("p and shift pressed together");
        blockimgwidth = blockimgwidth + 10;
        blockimgheight = blockimgheight + 10;
        console.log(blockimgwidth);
        console.log(blockimgheight);
        document.getElementById("current_width").innerHTML = blockimgwidth;
        document.getElementById("current_height").innerHTML = blockimgheight;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("m and shift pressed together");
        blockimgwidth = blockimgwidth - 10;
        blockimgheight = blockimgheight - 10;
        document.getElementById("current_width").innerHTML = blockimgwidth;
        document.getElementById("current_height").innerHTML = blockimgheight;
    }

    if (keypressed == "37") {
        left();
    }
    if (keypressed == "38") {
        up();
    }
    if (keypressed == "39") {
        right();
    }
    if (keypressed == "40") {
        down();
    }
    if (keypressed == "87") {
        newimg("wall.jpg");
        console.log("w");
    }
    if (keypressed == "71") {
        newimg("ground.jpg");
        console.log("g");
    }
    if (keypressed == "76") {
        newimg("light_green.jpg");
        console.log("l");
    }
    if (keypressed == "84") {
        newimg("trunk.jpg");
        console.log("t");
    }
    if (keypressed == "89") {
        newimg("yellow_wall.png");
        console.log("y");
    }
    if (keypressed == "68") {
        newimg("dark_green.png");
        console.log("d");
        76
    }
    if (keypressed == "85") {
        newimg("unique.png");
        console.log("u");
    }
    if (keypressed == "67") {
        newimg("cloud.jpg");
        console.log("c");
    }
   
}
function up(){
    if (player_y>=0){
        player_y=player_y-blockimgheight;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+blockimgheight;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-blockimgwidth;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=900){
        player_x=player_x+blockimgwidth;
        canvas.remove(player_object);
        player_update();
    }
}