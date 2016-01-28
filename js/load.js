var debug = true;

var loadState = {

    preload: function() {

    },

    create: function() {
        if(debug && this.game.device.desktop)
        {
            game.add.plugin(Phaser.Plugin.Debug);
            game.add.plugin(Phaser.Plugin.Inspector);
        }

        game.stage.setBackgroundColor('#000');

        if(this.game.device.desktop) {
            console.log("going to kitchen")
            game.state.start('kitchen');
        }
        else {
            // TODO - mobile menu
        }
    }
};
