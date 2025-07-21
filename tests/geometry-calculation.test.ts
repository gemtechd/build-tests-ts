import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';
import Point from '../modules/ecs6-class/point';
import Line from '../modules/ecs6-class/line';

describe('geometry-calculation', () => {
    describe('calculateDistance', () => {
        it('should calculate the distance between two points', () => {
            const p1 = new Point({ x: 0, y: 0 });
            const p2 = new Point({ x: 3, y: 4 });
            expect(calculateDistance(p1, p2)).toBe(5);
        });
    });

    describe('calculateJunctionPoint', () => {
        it('should return true for identical lines', () => {
            const line1 = new Line({ slope: 2, n: 1 });
            const line2 = new Line({ slope: 2, n: 1 });
            expect(calculateJunctionPoint(line1, line2)).toBe(true);
        });

        it('should return false for parallel lines with different n', () => {
            const line1 = new Line({ slope: 2, n: 1 });
            const line2 = new Line({ slope: 2, n: 3 });
            expect(calculateJunctionPoint(line1, line2)).toBe(false);
        });

        it('should return the junction point for intersecting lines', () => {
           const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
const line2 = new Line({ point1: new Point({ x: 0, y: 2 }), point2: new Point({ x: 2, y: 0 }) });
line1.calculateSlope();
line1.calculateNOfLineFunction();
line2.calculateSlope();
line2.calculateNOfLineFunction();
const point = calculateJunctionPoint(line1, line2) as Point;
expect(point).toBeInstanceOf(Point);
expect(point.x).toBeCloseTo(1);
expect(point.y).toBeCloseTo(1);
        });
    });

    describe('isPointOnLine', () => {
        it('should return true if point is on the line', () => {
    const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const point = new Point({ x: 2, y: 5 });
    expect(isPointOnLine(line, point)).toBe(true);
});

        it('should return true if point is on the line', () => {
    const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const point = new Point({ x: 2, y: 5 });
    expect(isPointOnLine(line, point)).toBe(true);
});
    });
});