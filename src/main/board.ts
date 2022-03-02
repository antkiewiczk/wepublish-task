import { ReadLine } from 'readline';

import Canvas from './shapes/canvas';
import Rectangle from './shapes/rectangle';
import Line from './shapes/line';
import Fill from './shapes/fill';

export default class Board {
  readline: ReadLine;
  shapes: Array<Rectangle | Line | Fill>;
  grid: string[] | string;
  canvas: Canvas;

  constructor(int?: ReadLine) {
    this.readline = int;
    this.shapes = [];
    this.grid = [];
  }

  addShape(shape) {
    this.validateFitWithinBorders(shape);
    const board = Object.assign(new Board(), this);
    if (shape instanceof Canvas) {
      board.canvas = shape;
      board.shapes = [];
      board.grid = [];
    } else if (shape instanceof Fill) {
      board.grid = shape.paint(board.grid);
    } else if (shape.renderAt) {
      board.shapes.push(shape);
    }
    return board;
  }

  validateFitWithinBorders(shape) {
    if (shape == null) throw new Error('invalid shape');
    if (!(shape instanceof Canvas)) {
      if (this.canvas == null) {
        throw new Error('please crete a canvas first');
      }
      if (
        shape.rendersInside &&
        !shape.rendersInside(this.canvas.width - 1, this.canvas.heigth - 1)
      ) {
        throw new Error('invalid shape, it is outside of canvas');
      }
    }
  }

  render() {
    for (let y = 0; y < this.canvas.heigth; y += 1) {
      for (let x = 0; x < this.canvas.width; x += 1) {
        let square = x === 0 || y === 0 ? this.canvas.renderAt(x, y) : null;

        const line = this.grid[x];
        if (!line) this.grid[x] = [];

        if (!square) {
          for (let s = this.shapes.length - 1; s >= 0; s -= 1) {
            const v = this.shapes[s].renderAt(x, y);
            if (v) {
              square = v;
              break;
            }
          }
        }

        if (!square) {
          square = this.grid[x][y]
            ? this.grid[x][y]
            : this.canvas.renderAt(x, y);
        }
        this.grid[x][y] = square;
        this.readline.write(square);
      }
      this.readline.write('\n');
    }
  }
}
