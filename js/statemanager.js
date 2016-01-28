var w;
var h;
var windowedWidth = 640;
var windowedHeight = 480;
var fullscreen = false;

if(fullscreen) {
    w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
}
else {
    w = windowedWidth,
    h = windowedHeight;
}

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('kitchen', kitchenState);

game.state.start('boot');
