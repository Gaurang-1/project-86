var canvas=new fabric.Canvas('myCanvas');

block_height=80;
block_width=50;

player_x=433;
player_y=343;

var block_image="";
var player_objects="";

function player_update(){
    fabric.Image.fromURL("spidy.jpg",function (Img){
        player_objects=Img;
    
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
    block_image=Img;

    block_image.scaleToWidth(block_width);
    block_image.scaleToHeight(block_height);
    block_image.set({
        top:player_y,
        left:player_x

    });
    canvas.add(block_image);
    });

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed=='80'){
        console.log("p and shift are pressed at the same time");
        block_width=block_width+10;
        block_height=block_height+10;
        
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;

    }

    if (e.shiftKey == true && keyPressed=='77'){
        console.log("m and shift are ressed at the same time");
        block_width=block_width-10;
        block_height=block_height-10;

        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height; 
    }

    if (keyPressed=='70'){
        new_image('f.png');
        console.log("F was pressed for bringing Face")
    }

    if (keyPressed=='66'){
        new_image('ironman_body.png');
        console.log("B was pressed for bringing Body")
    }

    if (keyPressed=='76'){
        new_image('l.jpg');
        console.log("L was pressed for bringing Legs")
    }

    if (keyPressed=='72'){
        new_image('thor_right_hand.png');
        console.log("R was pressed for bringing Right Hand")
    }

    if (keyPressed=='72'){
        new_image('captain_america_left_hand.png');
        console.log("L was pressed for bringing Left Hand")
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if (player_y >=0){
        player_y=player_y-block_height;
        console.log("Height of Block ="+block_height)
        console.log("When up arrow pressed X position ="+player_x +" , Y position ="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function down(){
    if (player_y <=500){
        player_y=player_y+block_height;
        console.log("Height of Block ="+block_height)
        console.log("When down arrow pressed X position ="+player_x +" , Y position ="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function left(){
    if (player_x >=0){
        player_x=player_x-block_width;
        console.log("Width of Block ="+block_width)
        console.log("When up left pressed X position ="+player_x +" , Y position ="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function right(){
    if (player_x <=850){
        player_x=player_x+block_width;
        console.log("Width of Block ="+block_width)
        console.log("When right arrow pressed X position ="+player_x +" , Y position ="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}