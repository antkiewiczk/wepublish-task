import { validateShapes } from '../utils/errors';

export default class Canvas {
  width: number;
  heigth: number;

  constructor(width, height) {
    validateShapes({ coords: [width, height] });

    this.heigth = height + 2;
    this.width = width + 2;
  }

  renderAt(x: number, y: number) {
    if (y === 0 || y === this.heigth - 1) {
      return '-';
    }
    if (x === 0 || x === this.width - 1) {
      return '|';
    }
    return ' ';
  }
}
