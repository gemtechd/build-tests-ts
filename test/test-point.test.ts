import Point from "../modules/ecs6-class/point";

describe('Point', () => {
  it('should create a point at (0,0) by default', () => {
    const p = new Point();
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });

  it('should create a point at given coordinates', () => {
    const p = new Point({ x: 5, y: 7 });
    expect(p.x).toBe(5);
    expect(p.y).toBe(7);
  });

  it('should move vertically', () => {
    const p = new Point({ x: 1, y: 1 });
    p.moveVertical(3);
    expect(p.y).toBe(4);
  });

  it('should move horizontally', () => {
    const p = new Point({ x: 1, y: 1 });
    p.moveHorizontal(-2);
    expect(p.x).toBe(-1);
  });

  
});
