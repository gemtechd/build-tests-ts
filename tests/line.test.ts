import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';
describe('Line Class', () => {
    let line;
    beforeEach(() => {
        line = new Line({
            point1: new Point({ x: 1, y: 2 }),
            point2: new Point({ x: 3, y: 4 }),
        });
    });
    test('should calculate slope correctly', () => {
        expect(line.slope).toBe(1);
    });
    test('should calculate n of line function correctly', () => {
        expect(line.n).toBe(1);
    });
    test('should get point on X axis correctly', () => {
        const point = line.getPointOnXAsis();
        expect(point).toEqual(new Point({ x: -1, y: 0 }));
    });
    test('should get point on Y axis correctly', () => {
        const point = line.getPointOnYAsis();
        expect(point).toEqual(new Point({ x: 0, y: 1 }));
    });
    test('should get point by X correctly', () => {
        const point = line.getPointByX(2);
        expect(point).toEqual(new Point({ x: 2, y: 3 }));
    });
    test('should get point by Y correctly', () => {
        const point = line.getPointByY(3);
        expect(point).toEqual(new Point({ x: 2, y: 3 }));
    });
});