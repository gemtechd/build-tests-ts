import Point from '../modules/ecs6-class/point';

describe('Point', () => {
    it('should create a point with default values', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    it('should create a point with given values', () => {
        const point = new Point({ x: 5, y: 10 });
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });
});

describe('Point Movement', () => {
    it('should move the point vertically', () => {
        const point = new Point({ x: 3, y: 4 });
        point.moveVertical(2);
        expect(point.y).toBe(6);
    });

    it('should move the point vertically downwards', () => {
        const point = new Point({ x: 3, y: 4 });
        point.moveVertical(-3);
        expect(point.y).toBe(1);
    });

    it('should move the point horizontally to the right', () => {
        const point = new Point({ x: 3, y: 4 });
        point.moveHorizontal(3);
        expect(point.x).toBe(6);
    });

    it('should move the point horizontally to the left', () => {
        const point = new Point({ x: 3, y: 4 });
        point.moveHorizontal(-2);
        expect(point.x).toBe(1);
    });
});