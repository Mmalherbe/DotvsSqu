import Dot from "./dot.es6";
import Squ from "./squ.es6";
import KeyView from "./keyview.es6";
import Player from "./player.es6";


class Controller {
    constructor() {
        this.screenSize = {
            x: window.innerWidth,
                y:window.innerHeight
        };
        this.dots = [];
        this.squs = [];
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
this.canvas.width =this.screenSize.x;
this.canvas.height = this.screenSize.y;
        this.mousePos = {
            x: 0,
            y: 0
        };

        this.player = new Player();
        this.key = new KeyView();
        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });

        this.loop();
    }

    loop() {

        this.player.move(this.key.location);

        if(this.squs.length < 2000 && this.dots.length < 2000){
// if((Math.random() ) > 0.5){
//     this.squs.push(new Squ(this.mousePos.x,this.mousePos.y));
//
// }else{
//     this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));
//
// }
        }

        if(this.dots.length < 10){
            this.dots.push(new Dot(Math.random()*this.screenSize.x,Math.random()*this.screenSize.y));
        }

        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.squs.forEach(squ =>{
            squ.move();
            squ.draw(this.context);
        });
        this.dots.forEach(dot => {
            dot.move();
            dot.draw(this.context);
        });
        this.player.draw(this.context);

        this.dots = this.dots.filter( dot => {
            return !dot.props.isDead;
        });


        this.squs = this.squs.filter( squ => {
            return !squ.props.isDead;
        });


        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

var c = new Controller();