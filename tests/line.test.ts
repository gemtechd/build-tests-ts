import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

describe("Line class", () => {
    it("should create a line with default points", () => {
        const line = new Line();
        expect(line.point1).toBeInstanceOf(Point);
        expect(line.point2).toBeInstanceOf(Point);
        expect(line.slope).toBeUndefined();
        expect(line.n).toBeUndefined();
    });

    it("should create a line with custom points", () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 4 });
        const line = new Line({ point1: p1, point2: p2 });
        expect(line.point1.x).toBe(1);
        expect(line.point1.y).toBe(2);
        expect(line.point2.x).toBe(3);
        expect(line.point2.y).toBe(4);
    });

    it("should calculate the slope correctly", () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        expect(line.slope).toBe((2 - 6) / (1 - 3));
    });

    it("should calculate n of the line function", () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.slope).not.toBeUndefined();
        if (line.slope !== undefined) {
            expect(line.n).toBeCloseTo(p1.y - line.slope * p1.x);
        }
    });

    it("should get point by X", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByX(3);
        expect(point).toBeInstanceOf(Point);
        expect(point?.x).toBe(3);
        expect(point?.y).toBe(2 * 3 + 1);
    });

    it("should get point by Y", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByY(7);
        expect(point).toBeInstanceOf(Point);
        expect(point?.y).toBe(7);
        expect(point?.x).toBe((7 - 1) / 2);
    });

    it("should get point on X axis (y=0)", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointOnXAsis();
        expect(point).toBeInstanceOf(Point);
        expect(point?.y).toBe(0);
        expect(point?.x).toBe(-0.5);
    });

    it("should get point on Y axis (x=0)", () => {
        const line = new Line({ point1: new Point({ x: 0, y: 1 }), point2: new Point({ x: 2, y: 5 }) });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointOnYAsis();
        expect(point).toBeInstanceOf(Point);
        expect(point?.x).toBe(0);
        expect(point?.y).toBe(1);
    });

    it("should return undefined for getPointByX/getPointByY if slope or n is missing", () => {
        const line = new Line();
        expect(line.getPointByX(1)).toBeUndefined();
        expect(line.getPointByY(1)).toBeUndefined();
    });

    it("should handle vertical line slope calculation (division by zero)", () => {
        const p1 = new Point({ x: 2, y: 3 });
        const p2 = new Point({ x: 2, y: 5 });
        const line = new Line({ point1: p1, point2: p2 });
        expect(() => line.calculateSlope()).toThrow();
    });
});