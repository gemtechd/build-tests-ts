import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';
import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

describe('Math Functions', () => {
    test('calculateDistance should return correct distance between two points', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 3, y: 4 });
        const distance = calculateDistance(point1, point2);
        expect(distance).toBe(5); // 3-4-5 triangle
    });

    test('calculateJunctionPoint should return true for coincident lines', () => {
        const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        const line2 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(true);
    });

    test('calculateJunctionPoint should return false for parallel lines', () => {
        const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        const line2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 2 }) });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(false);
    });

    test('calculateJunctionPoint should return junction point for intersecting lines', () => {
        const line1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        const line2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 0 }) });
        const junctionPoint = calculateJunctionPoint(line1, line2);
        expect(junctionPoint).toBeInstanceOf(Point);
    });

    test('isPointOnLine should return true if point is on the line', () => {
        const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        const point = new Point({ x: 1, y: 1 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(true);
    });

    test('isPointOnLine should return false if point is not on the line', () => {
        const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        const point = new Point({ x: 1, y: 2 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
    });
});