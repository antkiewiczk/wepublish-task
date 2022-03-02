import Line from '../shapes/line';
import { validateCommands } from '../utils/errors';

export default class LineCommand {
  shape: Line;

  constructor(str: string) {
    const params = str.split(' ').splice(1);
    validateCommands({ command: str, type: 'line', params });

    const inputs = params.map((c) => parseInt(c, 10));
    this.shape = new Line(inputs[0], inputs[1], inputs[2], inputs[3]);
  }

  render() {
    return this.shape;
  }
}
