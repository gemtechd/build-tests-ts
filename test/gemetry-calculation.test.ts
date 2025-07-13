import { calculateDistance, calculateJunctionPoint, isPointOnLine } from '../modules/geometry-calculation';
import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

// modules/geometry-calculation.test.ts

describe('calculateDistance', () => {
    it('מחזירה 0 עבור אותה נקודה', () => {
        const p = new Point({ x: 1, y: 1 });
        expect(calculateDistance(p, p)).toBe(0);
    });

    it('מחזירה מרחק נכון בין שתי נקודות', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 3, y: 4 });
        expect(calculateDistance(p1, p2)).toBe(5);
    });
});

describe('calculateJunctionPoint', () => {
    it('מחזירה true עבור קווים חופפים', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x:1, y: 1 }) });
        l1.calculateSlope();
        l1.calculateNOfLineFunction();
        const l2 = new Line({ point1: new Point({ x: 2, y: 2 }), point2: new Point({ x: 3, y: 3 }) });
        l2.calculateSlope();
        l2.calculateNOfLineFunction();
        expect(calculateJunctionPoint(l1, l2)).toBe(true);
    });

    it('מחזירה false עבור קווים מקבילים', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
        l1.calculateSlope();
        l1.calculateNOfLineFunction();
        const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 2 }) });
        l2.calculateSlope();
        l2.calculateNOfLineFunction();
        expect(calculateJunctionPoint(l1, l2)).toBe(false);
    });

    it('מחזירה נקודת חיתוך עבור קווים נחתכים', () => {
        const l1 = new Line({ point1: new Point({ x: 0, y:0}), point2: new Point({ x:1, y: 1 }) });
        l1.calculateSlope();
        l1.calculateNOfLineFunction();
        const l2 = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 1, y: 0 }) });
        l2.calculateSlope();
        l2.calculateNOfLineFunction();

        console.log('l1:', l1.slope, l1.n);
        console.log('l2:', l2.slope, l2.n);

        const result = calculateJunctionPoint(l1, l2) as Point;
        expect(result).toBeInstanceOf(Point);
        expect(result.x).toBeCloseTo(0.5);
        expect(result.y).toBeCloseTo(0.5);
    });
});

describe('isPointOnLine', () => {
    it('מחזירה true עבור נקודה על הקו', () => {
        const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        l.calculateSlope();
        l.calculateNOfLineFunction();
        const p = new Point({ x: 1, y: 1 });
        expect(isPointOnLine(l, p)).toBe(true);
    });

    it('מחזירה false עבור נקודה שלא על הקו', () => {
        const l = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
        l.calculateSlope();
        l.calculateNOfLineFunction();
        const p = new Point({ x: 1, y: 2 });
        expect(isPointOnLine(l, p)).toBe(false);
    });
});