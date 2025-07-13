import Point from '../ecs6-class/point';

describe('Point Class', () => {
    test('Default values of x and y should be 0', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test('Should initialize x and y with provided values', () => {
        const point = new Point({ x: 5, y: 10 });
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });

    test('moveVertical should correctly update y value', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveVertical(10);
        expect(point.y).toBe(10);
        point.moveVertical(-5);
        expect(point.y).toBe(5);
    });

    test('moveHorizontal should correctly update x value', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveHorizontal(15);
        expect(point.x).toBe(15);
        point.moveHorizontal(-10);
        expect(point.x).toBe(5);
    });
});