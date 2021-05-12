var canvas = document.getElementById('canvas-1');
var ctx = canvas.getContext('2d');

var noOfBalls = 100;
var balls = [];
function Ball(index, x, y, radius, color) {
    this.index = index
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = getRandomNumber(-2, 2);
    while (this.dx > -0.1 && this.dx < 0.1) {
        this.dx = getRandomNumber(-2, 2);
    }
    this.dy = getRandomNumber(-2, 2);
    while (this.dy > -0.1 && this.dy < 0.1) {
        this.dy = getRandomNumber(-2, 2);
    }
    console.log(this.dx, this.dy)
    this.draw = function () {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

    }.bind(this)

    this.moveBall = function () {
        // ctx.clearRect(this.x, this.y, this.radius, this.radius);

        collisionWithWall(this)
        collisionWithBall(this, balls);
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }.bind(this)

    // setInterval(this.moveBall, 10);

}

var colors = ['#FF0000', '#0000FF', '#008000', '#800080', '#000000', '#FFFF00', '#008080']

for (var i = 0; i < noOfBalls; i++) {
    var radius = getRandomNumber(4, 8);
    var x = getRandomNumber(radius * 2, canvas.width - radius * 2);
    var y = getRandomNumber(radius * 2, canvas.height - radius * 2);
    var ball = new Ball(i, x, y, radius, colors[Math.floor(`${getRandomNumber(0, colors.length)}`)])
    ball.draw();

    balls.push(ball);
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) {
        ball.moveBall();
    })
}
animate();





