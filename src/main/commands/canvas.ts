import Canvas from '../shapes/canvas';

export default class CanvasCommand {
  constructor(str) {
    const canvasCmd = '[Canvas: C w h]';
    const params = str.split(' ').splice(1);
    const inputs = params.map((c) => parseInt(c, 10));
    try {
      this.shape = new Canvas(inputs[0], inputs[1]);
    } catch (err) {
      throw new Error(`${canvasCmd} canvas command ${err}`);
    }
  }

  render() {
    return this.shape;
  }
}
