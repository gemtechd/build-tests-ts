import Point from '../modules/ecs6-class/point';

describe("Point class", () => {
    it("should create a point with default values", () => {
        const p = new Point();
        expect(p.x).toBe(0);
        expect(p.y).toBe(0);
    });

    it("should create a point with custom values", () => {
        const p = new Point({ x: 5, y: -3 });
        expect(p.x).toBe(5);
        expect(p.y).toBe(-3);
    });

    it("should move vertically", () => {
        const p = new Point({ x: 1, y: 2 });
        p.moveVertical(3);
        expect(p.y).toBe(5);
        p.moveVertical(-2);
        expect(p.y).toBe(3);
    });

    it("should move horizontally", () => {
        const p = new Point({ x: 1, y: 2 });
        p.moveHorizontal(4);
        expect(p.x).toBe(5);
        p.moveHorizontal(-1);
        expect(p.x).toBe(4);
    });
});