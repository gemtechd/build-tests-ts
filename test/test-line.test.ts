import Line from "../modules/ecs6-class/line";
import Point from "../modules/ecs6-class/point";

describe('Line', () => {
  it('should create a line with default points', () => {
    const line = new Line();
    expect(line.point1.x).toBe(0);
    expect(line.point1.y).toBe(0);
    expect(line.point2.x).toBe(0);
    expect(line.point2.y).toBe(0);
  });

  it('should calculate slope correctly', () => {
    const p1 = new Point({ x: 1, y: 2 });
    const p2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1: p1, point2: p2 });
    line.calculateSlope();
    expect(line.slope).toBe((2 - 6) / (1 - 3)); // -4 / -2 = 2
  });

  it('should calculate n (intercept) correctly', () => {
    const p1 = new Point({ x: 1, y: 2 });
    const p2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1: p1, point2: p2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    expect(line.n).toBe(0); // y = 2x, so n = 0
  });

  it('should get point by X', () => {
    const p1 = new Point({ x: 1, y: 2 });
    const p2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1: p1, point2: p2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const point = line.getPointByX(2);
    expect(point?.x).toBe(2);
    expect(point?.y).toBe(4);
  });

  it('should get point by Y', () => {
    const p1 = new Point({ x: 1, y: 2 });
    const p2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1: p1, point2: p2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const point = line.getPointByY(8);
    expect(point?.y).toBe(8);
    expect(point?.x).toBe(4);
  });
  it('should get point on X axis', () => {
  const p1 = new Point({ x: 1, y: 2 });
  const p2 = new Point({ x: 3, y: 6 });
  const line = new Line({ point1: p1, point2: p2 });
  line.calculateSlope();
  line.calculateNOfLineFunction();
  const point = line.getPointOnXAsis();
  expect(point?.y).toBe(0);
});

it('should get point on Y axis', () => {
  const p1 = new Point({ x: 1, y: 2 });
  const p2 = new Point({ x: 3, y: 6 });
  const line = new Line({ point1: p1, point2: p2 });
  line.calculateSlope();
  line.calculateNOfLineFunction();
  const point = line.getPointOnYAsis();
  expect(point?.x).toBe(0);
});
it('should return undefined if slope or n is undefined', () => {
  const line = new Line();
  expect(line.getPointByX(5)).toBeUndefined();
  expect(line.getPointByY(5)).toBeUndefined();
});
it('should not set n if slope is undefined', () => {
  const line = new Line();
  line.calculateNOfLineFunction();
  expect(line.n).toBeUndefined();
});

// it('should not set n if slope is 0', () => {
//   const p1 = new Point({ x: 1, y: 2 });
//   const p2 = new Point({ x: 3, y: 2 }); // אותו y -> שיפוע 0
//   const line = new Line({ point1: p1, point2: p2 });
//   line.calculateSlope();
//   line.calculateNOfLineFunction();
  
//   expect(line.n).toBeUndefined();
 
// });
it('should not set n if slope is 0', () => {
  const p1 = new Point({ x: 1, y: 2 });
  const p2 = new Point({ x: 3, y: 2 }); // אותו y -> שיפוע 0
  const line = new Line({ point1: p1, point2: p2 });
  line.calculateSlope();
  line.calculateNOfLineFunction();
  // expect(line.slope).toBeCloseTo(0);
  expect(line.n).toBeUndefined();
});
});