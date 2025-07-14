import Point from '../modules/ecs6-class/point';
import Line from '../modules/ecs6-class/line';
import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';

describe('geometry-calculation', () => {
    describe('calculateDistance', () => {
        test('should calculate distance between two points', () => {
            const p1 = new Point({ x: 0, y: 0 });
            const p2 = new Point({ x: 3, y: 4 });
            expect(calculateDistance(p1, p2)).toBe(5);
        });
    });

    describe('calculateJunctionPoint', () => {
        test('should return true for identical lines', () => {
            const p1 = new Point({ x: 0, y: 0 });
            const p2 = new Point({ x: 2, y: 2 });
            const line1 = new Line({ point1: p1, point2: p2 });
            const line2 = new Line({ point1: p1, point2: p2 });
            line1.calculateSlope();
            line1.calculateNOfLineFunction();
            line2.calculateSlope();
            line2.calculateNOfLineFunction();
            expect(calculateJunctionPoint(line1, line2)).toBe(true);
        });

        test('should return false for parallel lines', () => {
            const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
            const line2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 2 }) });
            line1.calculateSlope();
            line1.calculateNOfLineFunction();
            line2.calculateSlope();
            line2.calculateNOfLineFunction();
            expect(calculateJunctionPoint(line1, line2)).toBe(false);
        });

        test('should return junction point for intersecting lines', () => {
            const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
            const line2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 0 }) });
            line1.calculateSlope();
            line1.calculateNOfLineFunction();
            line2.calculateSlope();
            line2.calculateNOfLineFunction();
            const result = calculateJunctionPoint(line1, line2);
            expect(result).toBeInstanceOf(Point);
            expect((result as Point).x).toBeCloseTo(0.5, 4);
            expect((result as Point).y).toBeCloseTo(0.5, 4);
        });
        test('should return undefined if slope or n is undefined', () => {
        const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        const line2 = new Line({ point1: new Point({ x: 2, y: 2 }), point2: new Point({ x: 3, y: 3 }) });
        expect(calculateJunctionPoint(line1, line2)).toBeUndefined();
    });
    });

    describe('isPointOnLine', () => {
        test('should return true if point is on the line', () => {
            const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const point = new Point({ x: 1, y: 1 });
            expect(isPointOnLine(line, point)).toBe(false);
        });

      
  test('should return false if n is different', () => {
    const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 3 }) });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const point = new Point({ x: 1, y: 0 });
    expect(isPointOnLine(line, point)).toBe(false);
});
    });
});

    