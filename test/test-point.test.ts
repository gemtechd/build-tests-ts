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
// import Point from "../modules/ecs6-class/point";
// import { calculateDistance } from "../modules/geometry-calculation";

// describe("calculateDistance", () => {
//   it("should calculate distance only on x axis (y is ignored)", () => {
//     const p1 = new Point({ x: 1, y: 2 });
//     const p2 = new Point({ x: 4, y: 10 });
//     // הפונקציה מתעלמת מה-y, לכן התוצאה היא |4-1| = 3
//     expect(calculateDistance(p1, p2)).toBe(3);
//   });

//   it("should return 0 for same x", () => {
//     const p1 = new Point({ x: 5, y: 2 });
//     const p2 = new Point({ x: 5, y: 100 });
//     // הפונקציה מתעלמת מה-y, לכן התוצאה היא 0
//     expect(calculateDistance(p1, p2)).toBe(0);
//   });
// });