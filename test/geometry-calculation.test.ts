import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';
import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

describe('calculateDistance', () => {
    it('returns 0 for the same point', () => {
        const p = new Point({ x: 1, y: 1 });
        expect(calculateDistance(p, p)).toBe(0);
    });

    it('returns correct distance between two points', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 3, y: 4 });
        expect(calculateDistance(p1, p2)).toBe(5);
    });
});

describe('calculateJunctionPoint', () => {
    it('returns true for overlapping lines', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x:1, y: 1 }) });
        const l2 = new Line({ point1: new Point({ x: 2, y: 2 }), point2: new Point({ x: 3, y: 3 }) });
        expect(calculateJunctionPoint(l1, l2)).toBe(true);
    });

    it('returns false for parallel lines', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 2 }) });
        expect(calculateJunctionPoint(l1, l2)).toBe(false);
    });

    it('returns intersection point for intersecting lines', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y:0}), point2: new Point({ x:1, y: 1 }) });
        const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 0 }) });

        const result = calculateJunctionPoint(l1, l2) as Point;
        expect(result).toBeInstanceOf(Point);
        expect(result.x).toBeCloseTo(0.5);
        expect(result.y).toBeCloseTo(0.5);
    });
});

describe('isPointOnLine', () => {
    it('returns true for a point on the line', () => {
        const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        const p = new Point({ x: 1, y: 1 });
        expect(isPointOnLine(l, p)).toBe(true);
    });

    it('returns false for a point not on the line', () => {
        const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        const p = new Point({ x: 1, y: 2 });
        expect(isPointOnLine(l, p)).toBe(false);
    });
});