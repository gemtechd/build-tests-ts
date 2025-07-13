import Point from "../modules/ecs6-class/point";
import Line from "../modules/ecs6-class/line";
import { calculateDistance, calculateJunctionPoint, isPointOnLine } from "../modules/geometry-calculation";

describe("geometry-calculation", () => {
  describe("calculateDistance", () => {
    it("should calculate distance only on x axis (y is ignored)", () => {
      const p1 = new Point({ x: 1, y: 2 });
      const p2 = new Point({ x: 4, y: 10 });
      expect(calculateDistance(p1, p2)).toBe(3);
    });

    it("should return 0 for same x", () => {
      const p1 = new Point({ x: 5, y: 2 });
      const p2 = new Point({ x: 5, y: 100 });
      expect(calculateDistance(p1, p2)).toBe(0);
    });
  });

  describe("calculateJunctionPoint", () => {
    it("should return true for identical lines", () => {
      const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
      l1.calculateSlope();
      l1.calculateNOfLineFunction();
      const l2 = new Line({ point1: new Point({ x: 2, y: 2 }), point2: new Point({ x: 3, y: 3 }) });
      l2.calculateSlope();
      l2.calculateNOfLineFunction();
      expect(calculateJunctionPoint(l1, l2)).toBe(true);
    });

    it("should return false for parallel lines with different n", () => {
      const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
      l1.calculateSlope();
      l1.calculateNOfLineFunction();
      const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 2 }) });
      l2.calculateSlope();
      l2.calculateNOfLineFunction();
      expect(calculateJunctionPoint(l1, l2)).toBe(false);
    });

    it("should return a Point for intersecting lines", () => {
      const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
      l1.calculateSlope();
      l1.calculateNOfLineFunction();
      const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 0 }) });
      l2.calculateSlope();
      l2.calculateNOfLineFunction();
      const result = calculateJunctionPoint(l1, l2);
      expect(result).toBeInstanceOf(Point);
    });
  });

  describe("isPointOnLine", () => {
    it("should return true if point is on the line", () => {
      const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
      l.calculateSlope();
      l.calculateNOfLineFunction();
      const p = new Point({ x: 1, y: 1 });
      expect(isPointOnLine(l, p)).toBe(true);
    });

    it("should return false if point is not on the line", () => {
      const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
      l.calculateSlope();
      l.calculateNOfLineFunction();
      const p = new Point({ x: 1, y: 2 });
      expect(isPointOnLine(l, p)).toBe(false);
    });
  });
});