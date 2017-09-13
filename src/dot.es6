export default class Dot {
    constructor(x,y){
        this.props = {
            x: x,
            y: y,
            vel: {
                x: Math.random() * 8 - 4,
                y: Math.random() * 2 - 2
            },
            gravity: 0.1,
            color: this.randomColor(),
            size:this.randomSize(),
            isDead : false
        };
    }

    move() {
        if(this.props.y < 0 || this.props.y > 1000 || this.props.x < 0 || this.props.x > 1000){
            this.props.isDead = true;
        }

        this.props.vel.y += this.props.gravity;
    
        this.props.x += this.props.vel.x;
        this.props.y += this.props.vel.y;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.props.x,this.props.y,this.props.size,0,2*Math.PI);
        context.fillStyle= this.props.color;
        context.stroke();
        context.fill();


    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    randomSize(){
        return Math.floor(Math.random()*10);
    }
}