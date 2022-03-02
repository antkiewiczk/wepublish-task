import { validateShapes } from '../utils/errors';

interface ShapeParams {
  x: number;
  y: number;
}

export default class Rectangle {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    validateShapes({ coords: [x1, y1, x2, y2] });

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  renderAt(x, y: ShapeParams) {
    if (
      (x >= this.x1 && x <= this.x2 && (y === this.y1 || y === this.y2)) ||
      (y >= this.y1 && y <= this.y2 && (x === this.x1 || x === this.x2))
    )
      return 'x';
    return null;
  }

  rendersInside(width, heigth) {
    return (
      this.x1 < width && this.y1 < heigth && this.x2 < width && this.y2 < heigth
    );
  }
}
