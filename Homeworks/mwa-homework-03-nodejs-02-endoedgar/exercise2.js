const { EventEmitter } = require('events');

class Gym extends EventEmitter {
    intervalHandle;

    constructor() {
        super();

        this.intervalHandle = setInterval(() => {
            this.emit("boom");
        }, 1000);
    }

    rest() {
        clearInterval(this.intervalHandle);
    }
};

let gym = new Gym();
gym.on('boom', () => {
    console.log('Athlete is working out');
});