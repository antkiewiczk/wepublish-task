import Canvas from '../shapes/canvas';
import { validateCommands } from '../utils/errors';

export default class CanvasCommand {
  shape: Canvas;

  constructor(str: string) {
    const params = str.split(' ').splice(1);
    validateCommands({ command: str, type: 'canvas', params });

    const inputs = params.map((c) => parseInt(c, 10));

    this.shape = new Canvas(inputs[0], inputs[1]);
  }

  render() {
    return this.shape;
  }
}
