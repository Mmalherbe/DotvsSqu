import Dot from "./dot.es6";
import Squ from "./squ.es6";
class Controller {
    constructor() {
        this.dots = [];
        this.squs = [];
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");

        this.mousePos = {
            x: 0,
            y: 0
        };

        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });

        this.loop();
    }

    loop() {
if((Math.random() ) > 0.5){
    this.squs.push(new Squ(this.mousePos.x,this.mousePos.y));

}else{
    this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));

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
    
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

var c = new Controller();