import Point from '../modules/ecs6-class/point';

describe('Point', () => {
    test('should create a point with default values', () => {
        const p = new Point();
        expect(p.x).toBe(0);
        expect(p.y).toBe(0);
    });

    test('should create a point with given values', () => {
        const p = new Point({ x: 5, y: 7 });
        expect(p.x).toBe(5);
        expect(p.y).toBe(7);
    });

    test('should move vertically', () => {
        const p = new Point({ x: 1, y: 2 });
        p.moveVertical(3);
        expect(p.y).toBe(5);
        p.moveVertical(-2);
        expect(p.y).toBe(3);
    });

    test('should move horizontally', () => {
        const p = new Point({ x: 4, y: 6 });
        p.moveHorizontal(2);
        expect(p.x).toBe(6);
        p.moveHorizontal(-3);
        expect(p.x).toBe(3);
    });
});