let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let Wagon1 = new Wagon(300, 0, 50, 50, 20);
let hook1 = new hook(300,0,10,10,10)
let gold1 = new gold(300,300,10,10,10)
Wagon1.drawLine(ctx);
hook1.drawLine(ctx);
gold1.drawLine(ctx);

function checkCollision(){}

function move() {
    switch (event.keyCode) {
        case 37: {
            Wagon1.moveLeft();
            break
        }
        case 39: {
            Wagon1.moveRight();
            break
        }
        case 40:{
            hook1.moveDown()
            break

        }
    }
    update();
}

function update() {
    ctx.clearRect(0, 0, 1000, 500);
 Wagon1.drawLine(ctx)

    gold1.drawLine(ctx)
}







