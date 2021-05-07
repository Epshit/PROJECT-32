const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

function preload() {
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=0400 && hour<=0500){
            bg = "sprites/sunrise1.png";
        }

        if (hour>=0600 && hour<0700){
            bg = "sprites/sunrise2.png";
        }

        if(hour>=0800 && hour<=0900){
            bg = "sprites/sunrise3.png";
        }

        if(hour>=1000 && hour<=1100){
            bg = "sprites/sunrise4.png";
        }

        if(hour>=1200 && hour<=1300){
            bg = "sprites/sunrise5.png";
        }

        if(hour>=1400 && hour<=1500){
            bg = "sprites/sunrise6.png";
        }

        if(hour>=1600 && hour<=1700){
            bg = "sprites/sunset7.png";
        }

        if(hour>=1800 && hour<=1900){
            bg = "sprites/sunset8.png";
        }

        if(hour>=2000 && hour<=2100){
            bg = "sprites/sunset9.png";
        }

        if(hour>=2200 && hour<=2300){
            bg = "sprites/sunset10.png";
        }

        if(hour>=0000 && hour<=0100){
            bg = "sprites/sunset11.png";
        }

        if(hour>=0200 && hour<=0300){
            bg = "sprites/sunset12.png";
        }

        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }
}
