import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';

describe('Math Functions', () => {
    test('calculateDistance should return correct distance between two points', () => {
        const point1 = { x: 0, y: 0 };
        const point2 = { x: 3, y: 4 };
        const distance = calculateDistance(point1 as any, point2 as any);
        expect(distance).toBe(5);
    });

    test('calculateJunctionPoint should return true for coincident lines', () => {
        const line1 = { slope: 1, n: 0 };
        const line2 = { slope: 1, n: 0 };
        const result = calculateJunctionPoint(line1 as any, line2 as any);
        expect(result).toBe(true);
    });

    test('calculateJunctionPoint should return false for parallel lines', () => {
        const line1 = { slope: 1, n: 0 };
        const line2 = { slope: 1, n: 1 };
        const result = calculateJunctionPoint(line1 as any, line2 as any);
        expect(result).toBe(false);
    });

    test('calculateJunctionPoint should return junction point for intersecting lines', () => {
        const line1 = { slope: 1, n: 0 };
        const line2 = { slope: -1, n: 1 };
        const junctionPoint = calculateJunctionPoint(line1 as any, line2 as any);
        expect(junctionPoint).toHaveProperty('x');
        expect(junctionPoint).toHaveProperty('y');
    });

    test('isPointOnLine should return true if point is on the line', () => {
        const line = { slope: 1, n: 0 };
        const point = { x: 1, y: 1 };
        const result = isPointOnLine(line as any, point as any);
        expect(result).toBe(true);
    });

    test('isPointOnLine should return false if point is not on the line', () => {
        const line = { slope: 1, n: 0 };
        const point = { x: 1, y: 2 };
        const result = isPointOnLine(line as any, point as any);
        expect(result).toBe(false);
    });
});