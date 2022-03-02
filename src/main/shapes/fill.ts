import { validateShapes } from '../utils/errors';

interface Shape {
  x: number;
  y: number;
}

export default class Fill {
  x: number;
  y: number;
  color: string;
  grid: string;

  constructor(x: number, y: number, color: string) {
    validateShapes({ coords: [x, y], color });

    this.x = x;
    this.y = y;
    this.color = color;
  }

  renderAt(x: number, y: number) {
    return this.grid && this.grid[x] && this.grid[x][y]
      ? this.grid[x][y]
      : null;
  }

  rendersInside(width: number, heigth: number) {
    return this.x < width && this.y < heigth;
  }

  paint(grid) {
    this.grid = grid.slice(0);
    this.floodFillLoop(this.grid, this.x, this.y, ' ', this.color);
    return this.grid;
  }

  floodFillLoop(
    grid: string,
    x: number,
    y: number,
    targetColor: string,
    replacementColor: string,
  ) {
    const node = grid[x][y];
    if (node !== targetColor) return;
    if (node === replacementColor) return;
    let q = [
      {
        x,
        y,
      },
    ];

    while (q.length > 0) {
      const n = q[0];
      q = q.slice(1);
      this.processNodeAt(grid, n.x + 1, n.y, targetColor, replacementColor, q);
      this.processNodeAt(grid, n.x - 1, n.y, targetColor, replacementColor, q);
      this.processNodeAt(grid, n.x, n.y - 1, targetColor, replacementColor, q);
      this.processNodeAt(grid, n.x, n.y + 1, targetColor, replacementColor, q);
    }
  }

  processNodeAt(
    grid: string,
    x: number,
    y: number,
    targetColor: string,
    replacementColor: string,
    q: Shape[],
  ) {
    const nextNode = grid.length > x && grid[x].length > y && grid[x][y];
    if (nextNode === targetColor) {
      // eslint-disable-next-line
      grid[x][y] = replacementColor;
      q.push({
        x,
        y,
      });
    }
  }
}
