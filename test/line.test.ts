import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

describe('Line', () => {
    it('should create a line with two points', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 2 });
        const line = new Line({ point1: p1, point2: p2 });
        expect(line.point1).toEqual(p1);
        expect(line.point2).toEqual(p2);
    });

    it('should calculate the correct slope', () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        expect(line.slope).toBeCloseTo(2);
    });

    it('should calculate the correct n (y-intercept)', () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        expect(line.n).toBeCloseTo(0);
    });

    it('should get correct point by X', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        const point = line.getPointByX(2);
        expect(point?.x).toBeCloseTo(2);
        expect(point?.y).toBeCloseTo(5);
    });

    it('should get correct point by Y', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        const point = line.getPointByY(7);
        expect(point?.y).toBeCloseTo(7);
        expect(point?.x).toBeCloseTo(3);
    });

    it('should get point on X axis (y=0)', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        const point = line.getPointOnXAsis();
        expect(point?.y).toBeCloseTo(0);
    });

    it('should get point on Y axis (x=0)', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        const point = line.getPointOnYAsis();
        expect(point?.x).toBeCloseTo(0);
        expect(point?.y).toBeCloseTo(1);
    });
});