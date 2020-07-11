// 'use strict';

export default class Timer {
    constructor(el, time) {
        this.el = el;
        this.time = time;
        this.interval;

        // this.render();
        // this.start();
        // this.stop();
        // this.tick();
    }

    start() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    render() {
        this.el.innerHTML = this.time;
    }

    tick() {
        this.time--;
        this.render();
        
        if (this.time <= 0) {
            this.stop();
        }
    }
}