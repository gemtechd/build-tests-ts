import Point from '../ecs6-class/point';

describe('Point class', () => {
    let point: Point;

    beforeEach(() => {
        point = new Point({ x: 5, y: 10 });
    });

    test('should initialize with default values', () => {
        const defaultPoint = new Point();
        expect(defaultPoint.x).toBe(0);
        expect(defaultPoint.y).toBe(0);
    });

    test('should initialize with provided values', () => {
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });

    test('should move vertically', () => {
        point.moveVertical(5);
        expect(point.y).toBe(15);
        point.moveVertical(-3);
        expect(point.y).toBe(12);
    });

    test('should move horizontally', () => {
        point.moveHorizontal(3);
        expect(point.x).toBe(8);
        point.moveHorizontal(-2);
        expect(point.x).toBe(6);
    });
});