"use strict";
// interface brings consistency to our code ,it tells the class that you should follow the protocol
class Camera {
    constructor(quality, isColor, burst, isFlashlight, length, isHD) {
        this.quality = quality;
        this.isColor = isColor;
        this.burst = burst;
        this.isFlashlight = isFlashlight;
        this.length = length;
        this.isHD = isHD;
    }
    startDLSR() {
        console.log("DLSR mode activated!");
    }
}
const sonyA1 = new Camera(1080, true, 50, true, 120, true);
sonyA1.startDLSR();
// we can add additional properties to class
// we can implements multiple interfaces
