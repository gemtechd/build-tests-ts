import Line from "../ecs6-class/line";
import Point from "../ecs6-class/point";

describe("Line Class", () => {
    test("Constructor initializes correctly", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 4 });
        const line = new Line({ point1, point2 });
        expect(line.point1).toEqual(point1);
        expect(line.point2).toEqual(point2);
        expect(line.slope).toBeUndefined();
        expect(line.n).toBeUndefined();
    });

    test("calculateSlope calculates slope correctly", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        expect(line.slope).toBe(2); // (6 - 2) / (3 - 1)
    });

    test("calculateNOfLineFunction calculates n correctly", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.n).toBe(0); // n = y - slope * x => 2 - 2 * 1 = 0
    });

    test("getPointOnXAsis returns correct point", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        const pointOnXAxis = line.getPointOnXAsis();
        expect(pointOnXAxis).toEqual(new Point({ x: 0, y: 0 }));
    });

    test("getPointOnYAsis returns correct point", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        const pointOnYAxis = line.getPointOnYAsis();
        expect(pointOnYAxis).toEqual(new Point({ x: 0, y: 0 }));
    });

    test("getPointByX calculates point correctly", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByX(2);
        expect(point).toEqual(new Point({ x: 2, y: 4 })); // y = slope * x + n => 2 * 2 + 0 = 4
    });

    test("getPointByY calculates point correctly", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const point = line.getPointByY(4);
        expect(point).toEqual(new Point({ x: 2, y: 4 })); // x = (y - n) / slope => (4 - 0) / 2 = 2
    });
});