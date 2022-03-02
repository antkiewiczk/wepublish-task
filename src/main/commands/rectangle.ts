import Rectangle from '../shapes/rectangle';
import { validateCommands } from '../utils/errors';

export default class RectangleCommand {
  shape: Rectangle;

  constructor(str: string) {
    const params = str.split(' ').splice(1);
    validateCommands({ command: str, type: 'rectangle', params });

    const inputs = params.map((c) => parseInt(c, 10));
    this.shape = new Rectangle(inputs[0], inputs[1], inputs[2], inputs[3]);
  }

  render() {
    return this.shape;
  }
}
