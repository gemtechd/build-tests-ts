import Line from '../ecs6-class/line';
import Point from '../ecs6-class/point';

describe('Line class', () => {
    let line: Line;
    let point1: Point;
    let point2: Point;

    beforeEach(() => {
        point1 = new Point({ x: 1, y: 2 });
        point2 = new Point({ x: 3, y: 4 });
        line = new Line({ point1, point2 });
    });

    it('should calculate slope correctly', () => {
        line.calculateSlope();
        expect(line.slope).toBe(1); // (2 - 4) / (1 - 3) = 1
    });

    it('should calculate n of line function correctly', () => {
        line.calculateNOfLineFunction();
        expect(line.n).toBe(1); // 2 - 1 * 1 = 1
    });

    it('should get point on X axis correctly', () => {
        line.calculateNOfLineFunction();
        const pointOnX = line.getPointOnXAsis();
        expect(pointOnX).toEqual(new Point({ x: -1, y: 0 })); // x = (0 - 1) / 1
    });

    it('should get point on Y axis correctly', () => {
        line.calculateNOfLineFunction();
        const pointOnY = line.getPointOnYAsis();
        expect(pointOnY).toEqual(new Point({ x: 0, y: 1 })); // y = 1 * 0 + 1
    });

    it('should get point by X correctly', () => {
        line.calculateNOfLineFunction();
        const pointByX = line.getPointByX(2);
        expect(pointByX).toEqual(new Point({ x: 2, y: 3 })); // y = 1 * 2 + 1
    });

    it('should get point by Y correctly', () => {
        line.calculateNOfLineFunction();
        const pointByY = line.getPointByY(3);
        expect(pointByY).toEqual(new Point({ x: 2, y: 3 })); // x = (3 - 1) / 1
    });
    it('calculateNOfLineFunction should not set n if slope is undefined', () => {
        const line = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 4 }) });
        line.calculateNOfLineFunction();
        expect(line.n).toBeUndefined();
    });

    it('getPointByX should return undefined if slope or n is undefined', () => {
        const line = new Line();
        expect(line.getPointByX(5)).toBeUndefined();
    });

    it('getPointByY should return undefined if slope or n is undefined', () => {
        const line = new Line();
        expect(line.getPointByY(5)).toBeUndefined();
    });
});







