var mathE = new MathE();
var game = new Brew(320, 240);

var player = {
    x: 50,
    y: 50,
    velocity: { x: 0, y: 0 },
};

function loop() {
    game.fill('black');
    game.rect('blue', player.x, player.y, 10, 10);

    player.x += player.velocity.x;
    player.y += player.velocity.y;

    player.velocity = game.getVector('d', 'a', 's', 'w');
}

setInterval(loop, 10);
