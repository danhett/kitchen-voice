var root;
var mode = "PASSIVE"; // can be PASSIVE or ACTIVE
var timer;

var kitchenState = {

    create: function() {

        root = this;

        var instructions = game.add.text(20, 20, 'Open the JS console for voice control data.', {font: '17px Courier', fill: '#fff'});

        var commands = game.add.text(20, 70, '- Say "OK" or "kitchen!" to start issuing commands.', {font: '13px Courier', fill: '#fff'});
        var nextBack = game.add.text(20, 100, '- Say "NEXT" or "BACK" to advance pages.', {font: '13px Courier', fill: '#fff'});
        var repeatThat = game.add.text(20, 130, '- Say "REPEAT" or "REPEAT THAT" to repeat the page.', {font: '13px Courier', fill: '#fff'});
        var anyStep = game.add.text(20, 160, '- Say "GO TO STEP" or "STEP" and a number to select a specfic step.', {font: '13px Courier', fill: '#fff'});

        root.setStageColor("#CE3F3F")

        this.initVoice();
    },

    /**
     * Setup annyang and add commands.
     */
    initVoice: function() {
        if(annyang) {
            console.log("Starting voice recognition...");

            var commands = {
                'OK': this.startListening,
                'kitchen': this.startListening,
                'next': this.nextStep,
                'next step': this.nextStep,
                'previous step': this.prevStep,
                'back a step': this.prevStep,
                'back': this.prevStep,
                'repeat': this.repeatStep,
                'repeat that': this.repeatStep,
                'go to step *tag': this.goToStep,
                'step *tag': this.goToStep,
                'go to *tag': this.goToStep,
            };

            annyang.debug()

            annyang.addCommands(commands);

            annyang.start({ autoRestart: true, continuous: false });
        }
        else
        {
            console.log("Couldn't start voice recognition. Are you using Chrome?");
        }
    },

    /**
     * Leaves passive mode and goes into active mode.
     * In other words, this is where commands are issued.
     */
    startListening: function() {
        root.setStageColor("#006400");

        mode = "ACTIVE";

        if(timer) clearInterval(timer);
        timer = window.setInterval(root.stopListening, 5000);
    },

    /**
     * Leaves passive mode and goes into active mode.
     * In other words, this is where commands are issued.
     */
    stopListening: function() {
        clearInterval(timer);

        root.setStageColor("#CE3F3F");

        mode = "PASSIVE";
    },

    /**
     * Repeats the current instruction.
     */
    repeatStep: function() {
        if(mode === "ACTIVE")
            console.log("*** Repeating step. ***");
    },

    /**
     * Goes to the next step.
     */
    nextStep: function(tag) {
        if(mode === "ACTIVE")
            console.log("*** Going to the next step. ***");
    },

    /**
     * Goes to the previous step.
     */
    prevStep: function(tag) {
        if(mode === "ACTIVE")
            console.log("*** Going to the previous step. ***");
    },

    /**
     * Goes to a specified step.
     */
    goToStep: function(tag) {
        if(mode === "ACTIVE")
            console.log("*** Going to step " + tag + " ***");
    },

    /**
     * Set the stage colour so we can see what's happening.
     */
    setStageColor: function(color) {
        root.stage.backgroundColor = color;
    }
};
