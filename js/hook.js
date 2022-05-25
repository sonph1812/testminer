let DogeIM = new Image();
DogeIM.src = "image/miner.jpeg"


class Wagon {
    x;
    y;
    width;
    height;
    speed;


    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    moveRight() {
        this.x = this.x + this.speed;

    }

    moveLeft() {
        this.x = this.x - this.speed;

    }

    checkCollision() {
        if (this.x + this.width < canvas.width) {
            this.width += this.height
        }
        if (this.x + this.width > canvas.width) {
            this.width -= this.height
        }
        if (this.x + this.width == canvas.width) {

        }
update()
    }


    drawLine(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'pink';
        ctx.fillRect(this.x, this.y, this.width, this.height, this.speed);
        ctx.fill();
        ctx.closePath();
    }

}


class hook {
    x;
    y;
    width;
    height;
    speed;

    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed
    }

    moveDown() {
        this.y = this.y + this.speed
    }

    drawLine(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height, this.speed);
        ctx.fill();
        ctx.closePath();
    }
}

class gold {
    x
    y
    width
    height
    speed

    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed

    }

    drawLine(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height, this.speed);
        ctx.fill();
        ctx.closePath();
    }
}




