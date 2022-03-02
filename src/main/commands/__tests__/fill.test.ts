import FillCommand from '../fill';

test('Command [B x y c] should create a fill with (x,y) and color (c)', () => {
  const fill = new FillCommand('B 0 5 p').render();
  expect(fill.x).toBe(0);
  expect(fill.y).toBe(5);
  expect(fill.color).toBe('p');
});
