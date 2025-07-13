import Point from '../ecs6-class/point';
import Line from '../ecs6-class/line';

describe('Line Class', () => {
    test('calculateSlope calculates correct slope', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 4 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        expect(line.slope).toBe((0 - 4) / (0 - 2)); // Should be 2
    });

    test('calculateNOfLineFunction calculates correct n', () => {
        const p1 = new Point({ x: 1, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.n).toBe(p1.y - line.slope! * p1.x);
    });

    test('getPointByX returns correct point', () => {
        const p1 = new Point({ x: 1, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByX(10);
        expect(point?.x).toBe(10);
        expect(point?.y).toBeCloseTo(line.slope! * 10 + line.n!);
    });

    test('getPointByY returns correct point', () => {
        const p1 = new Point({ x: 1, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByY(7);
        expect(point?.y).toBe(7);
        expect(point?.x).toBeCloseTo((7 - line.n!) / line.slope!);
    });

    test('getPointOnXAsis returns point on X axis', () => {
        const p1 = new Point({ x: 1, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointOnXAsis();
        expect(point?.y).toBe(0);
    });

    test('getPointOnYAsis returns point on Y axis', () => {
        const p1 = new Point({ x: 1, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointOnYAsis();
        expect(point?.x).toBe(0);
    });
});