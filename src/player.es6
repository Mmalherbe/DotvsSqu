import Keyview from "./keyview.es6"

class Player {
    constructor() {
        this.props = {
            xPos: 10,
            yPos: 10,
            height: 5,
            width: 5,
            hp: 3,
            color: "rgb(255,0,0)"
        };
        this.key = new Keyview;
    }

    draw(context) {
        context.fillStyle = this.props.color;
        context.fillRect(
            this.props.xPos,
            this.props.yPos,
            this.props.height,
            this.props.width
        );
    }

    move(movement) {
        if (movement.left && this.props.xPos <= window.innerWidth - window.innerWidth) {
            this.props.xPos === 0;
        } else if (movement.left) {
            this.props.xPos -= 10;
        }

        if(movement.right && this.props.xPos >= window.innerWidth - 10) {
            this.props.xPos === window.innerWidth;
        } else if (movement.right ===true ) {
            this.props.xPos += 10;
        }

        if(movement.down && this.props.yPos >= window.innerHeight - 10) {
            this.props.yPos === window.innerHeight;
        } else if(movement.down){
            this.props.yPos += 10;
        }

        if(movement.up && this.props.yPos <= window.innerHeight - window.innerHeight) {
            this.props.yPos === 0;
        } else if(movement.up) {
            this.props.yPos -= 10;
        }
        // this.collision();
    }

    collision(particle){
        // if (!particle) return;
        //
        // if ((particle.x + particle.width >= this.player.xPos)
        //     && (particle.x <= this.player.xPos + this.player.width)
        //     && (particle.y + particle.height >= this.player.yPos)
        //     && (particle.y <= this.player.yPos + this.player.height)
        // ) {
        //     console.log("hi");
        //     this.player.hp = this.player.hp - 1;
        //     this.player.color = "rgba(200,0,0,1)";
        //     setTimeout(()=>{ this.player.color = "rgba(0,254,0,1)";}, 100);
        //     return true;
        // }
        // return false;
    }

    get pos1() {
        return {
            x: this.props.xPos,
            y: this.props.yPos,
            width: this.props.width,
            height: this.props.height,
            color: this.props.color
        };
    }
}

module.exports = Player;