

import Point from "../modules/ecs6-class/point";
import Line from "../modules/ecs6-class/line";
import { calculateDistance, calculateJunctionPoint, isPointOnLine } from "../modules/geometry-calculation";

describe("geometry-calculation", () => {
  describe("calculateDistance", () => {
    it("should calculate the correct distance between two points", () => {
      const p1 = new Point({ x: 0, y: 0 });
      const p2 = new Point({ x: 3, y: 4 });
      expect(calculateDistance(p1, p2)).toBe(5);
    });
    });
describe("calculateJunctionPoint", () => {
    it("should return undefined if line1 slope is undefined", () => {
        const line1 = new Line({ slope: undefined, n: 1 });
        const line2 = new Line({ slope: 2, n: 1 });
        expect(calculateJunctionPoint(line1, line2)).toBeUndefined();
    });

    it("should return undefined if line2 slope is undefined", () => {
        const line1 = new Line({ slope: 1, n: 1 });
        const line2 = new Line({ slope: undefined, n: 2 });
        expect(calculateJunctionPoint(line1, line2)).toBeUndefined();
    });

    it("should return true for identical lines", () => {
        const line1 = new Line({ slope: 1, n: 1 });
        const line2 = new Line({ slope: 1, n: 1 });
        expect(calculateJunctionPoint(line1, line2)).toBe(true);
    });

    it("should return false for parallel lines", () => {
        const line1 = new Line({ slope: 1, n: 1 });
        const line2 = new Line({ slope: 1, n: 2 });
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });

    it("should return a point for intersecting lines", () => {
        const line1 = new Line({ slope: 1, n: 1 });
        const line2 = new Line({ slope: -1, n: 2 });
        const point = calculateJunctionPoint(line1, line2);
        expect(point).toBeDefined(); 
        expect(point).toHaveProperty('x'); 
        expect(point).toHaveProperty('y'); 
    });
});
 describe("isPointOnLine", () => {
    it("should return true if point is on the line", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = new Point({ x: 1, y: 1 }); 
        expect(isPointOnLine(line, point)).toBe(true);
    });

    it("should return false if point is not on the line", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = new Point({ x: 1, y: 2 });
        expect(isPointOnLine(line, point)).toBe(false);
    });


});
  });
  
 