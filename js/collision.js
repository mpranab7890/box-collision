function collisionWithWall(ball) {
    if (ball.x + ball.dx >= canvas.width - ball.radius || ball.x + ball.dx <= ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy >= canvas.height - ball.radius || ball.y + ball.dy <= ball.radius) {
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
                let angle = Math.atan2(DY, DX);
                let sin = Math.sin(angle);
                let cos = Math.cos(angle);

                // ball1 perpendicular velocities
                let vx1 = (currentBall.dx * cos + currentBall.dy * sin);
                let vy1 = (currentBall.dy * cos - currentBall.dx * sin);

                // ball2 perpendicular velocities
                let vx2 = (ball.dx * cos + ball.dy * sin);
                let vy2 = (ball.dy * cos - ball.dx * sin);

                // swapping the x velocity     
                currentBall.dx = vx2 * cos - vy1 * sin;
                currentBall.dy = vy1 * cos + vx2 * sin;
                ball.dx = vx1 * cos - vy2 * sin;
                ball.dy = vy2 * cos + vx1 * sin;



                collisionWithWall(currentBall);
                collisionWithWall(ball);

                // console.log(currentBall.dx, currentBall.dy)

                // currentBall.x += currentBall.dx;
                // currentBall.y += currentBall.dy;
                // ball.x += ball.dx;
                // ball.y += ball.dy;
            }
        }
    });
}

