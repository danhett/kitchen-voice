var bootState = {

    preload: function() {

    },

    create: function() {

        // Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.P2);

        // Initial Load State
        game.state.start('load');
    }
};
