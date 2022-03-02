import Fill from '../shapes/fill';
import { validateCommands } from '../utils/errors';

export default class FillCommand {
  shape: Fill;

  constructor(str: string) {
    const params = str.split(' ').splice(1);
    validateCommands({ command: str, type: 'fill', params });

    const x = parseInt(params[0], 10);
    const y = parseInt(params[1], 10);
    this.shape = new Fill(x, y, params[2]);
  }

  render() {
    return this.shape;
  }
}
