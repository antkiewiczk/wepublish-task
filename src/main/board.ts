import Canvas from './shapes/canvas';
import Fill from './shapes/fill';

export default class Board {
  constructor(int) {
    this.rl = int;
    this.shapes = [];
    this.grid = [];
  }

  addShape(shape) {
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
        this.rl.write(square);
      }
      this.rl.write('\n');
    }
  }
}
