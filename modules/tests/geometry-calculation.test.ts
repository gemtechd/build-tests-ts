import Point from '../ecs6-class/point';
import Line from '../ecs6-class/line';
import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../geometry-calculation';

describe('geometry-calculation module', () => {
    test('calculateDistance returns correct distance', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 3, y: 4 });
        expect(calculateDistance(p1, p2)).toBe(5); // 3-4-5 triangle
    });

    test('calculateJunctionPoint returns true for identical lines', () => {
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

    test('calculateJunctionPoint returns false for parallel lines', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 2 });
        const p3 = new Point({ x: 0, y: 1 });
        const p4 = new Point({ x: 2, y: 3 });
        const line1 = new Line({ point1: p1, point2: p2 });
        const line2 = new Line({ point1: p3, point2: p4 });
        line1.calculateSlope();
        line1.calculateNOfLineFunction();
        line2.calculateSlope();
        line2.calculateNOfLineFunction();
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });

    test('calculateJunctionPoint returns intersection point for crossing lines', () => {
        const l1p1 = new Point({ x: 0, y: 0 });
        const l1p2 = new Point({ x: 2, y: 2 });
        const l2p1 = new Point({ x: 0, y: 2 });
        const l2p2 = new Point({ x: 2, y: 0 });
        const line1 = new Line({ point1: l1p1, point2: l1p2 });
        const line2 = new Line({ point1: l2p1, point2: l2p2 });
        line1.calculateSlope();
        line1.calculateNOfLineFunction();
        line2.calculateSlope();
        line2.calculateNOfLineFunction();
        const intersection = calculateJunctionPoint(line1, line2);
         if (intersection instanceof Point) {
        expect(intersection.x).toBeCloseTo(1);
        expect(intersection.y).toBeCloseTo(1);
    } else {
        throw new Error('Intersection is not a Point');
    }
    });

    test('isPointOnLine returns true for point on line', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 2 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnLine = new Point({ x: 1, y: 1 });
        expect(isPointOnLine(line, pointOnLine)).toBe(true);
    });

    test('isPointOnLine returns false for point not on line', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 2 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointNotOnLine = new Point({ x: 1, y: 2 });
        expect(isPointOnLine(line, pointNotOnLine)).toBe(false);
    });

    test('calculateJunctionPoint throws error for undefined slope or n', () => {
    const p1 = new Point({ x: 0, y: 0 });
    const p2 = new Point({ x: 2, y: 2 });
    const line1 = new Line({ point1: p1, point2: p2 });
    line1.calculateSlope();
    line1.calculateNOfLineFunction();

    const line2 = new Line({ point1: p1, point2: p1 }); // קו עם אותו נקודה, שיפוע לא מוגדר
    line2.slope = undefined; // או line2.n = undefined;

    expect(() => calculateJunctionPoint(line1, line2)).toThrow(Error);
});


    
});