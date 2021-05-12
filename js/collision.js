function collisionWithWall(ball) {
    if (ball.x >= canvas.width - ball.radius || ball.x <= ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y >= canvas.height - ball.radius || ball.y <= ball.radius) {
        ball.dy = -ball.dy;
    }
    // this.x += this.dx;
    // this.y += this.dy;
    // return [ball.dx, ball.dy];
}

function collisionWithBall(currentBall, balls) {
    balls.forEach((ball) => {
        if (currentBall.index != ball.index) {
            var DX = currentBall.x - ball.x;
            var DY = currentBall.y - ball.y;
            var distance = (Math.sqrt(DX * DX + DY * DY)) || 1;

            if (distance <= currentBall.radius + ball.radius) {
                var nx = DX / distance;
                var ny = DY / distance;

                var relvx = ball.dx - currentBall.dx;
                var relvy = ball.dy - currentBall.dy;

                var speed = (relvx * nx + relvy * ny);
                currentBall.dx += (speed * nx);
                currentBall.dy += (speed * ny);
                ball.dx -= (speed * nx);
                ball.dy -= (speed * ny);
                // ball.dx = -ball.dx;
                // ball.dy = -ball.dy;
                // currentBall.x += currentBall.dx * Math.random();
                // currentBall.y += currentBall.dy * Math.random();

                currentBall.x += currentBall.dx;
                currentBall.y += currentBall.dy;
                ball.x += ball.dx;
                ball.y += ball.dy;

                collisionWithWall(currentBall);
                collisionWithWall(ball);
            }
        }
    });
}