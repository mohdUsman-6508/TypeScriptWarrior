// interface brings consistency to our code ,it tells the class that you should follow the protocol

interface TakePhoto {
  quality: number;
  isColor: boolean;
  burst: number;
}

interface shootVideo {
  isHD: boolean;
  length: number;
}

interface DLSRmode {
  startDLSR(): void;
}

class Camera implements TakePhoto, shootVideo, DLSRmode {
  constructor(
    public quality: number,
    public isColor: boolean,
    public burst: number,
    public isFlashlight: boolean,
    public length: number,
    public isHD: boolean
  ) {}

  startDLSR(): void {
    console.log("DLSR mode activated!");
  }
}

const sonyA1 = new Camera(1080, true, 50, true, 120, true);
sonyA1.startDLSR();

// we can add additional properties to class
// we can implements multiple interfaces
