import Point from '../modules/ecs6-class/point';

describe('Point Class', () => {
    let point;

    beforeEach(() => {
        point = new Point({ x: 1, y: 2 });
    });

    test('should initialize with default values', () => {
        const defaultPoint = new Point();
        expect(defaultPoint.x).toBe(0);
        expect(defaultPoint.y).toBe(0);
    });

    test('should initialize with given values', () => {
        expect(point.x).toBe(1);
        expect(point.y).toBe(2);
    });

    test('should move vertically correctly', () => {
        point.moveVertical(3);
        expect(point.y).toBe(5); // 2 + 3
        point.moveVertical(-2);
        expect(point.y).toBe(3); // 5 - 2
    });

    test('should move horizontally correctly', () => {
        point.moveHorizontal(4);
        expect(point.x).toBe(5); // 1 + 4
        point.moveHorizontal(-1);
        expect(point.x).toBe(4); // 5 - 1
    });
});