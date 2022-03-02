export default class Canvas {
  constructor(width, height) {
    this.heigth = height + 2;
    this.width = width + 2;
  }

  renderAt(x, y) {
    if (y === 0 || y === this.heigth - 1) {
      return '-';
    }
    if (x === 0 || x === this.width - 1) {
      return '|';
    }
    return ' ';
  }
}
