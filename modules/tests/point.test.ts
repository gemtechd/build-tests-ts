import Point from "../ecs6-class/point";
import Line from "../ecs6-class/line";
// filepath: d:\chany waingort\build-tests-ts\modules\ecs6-class\point.test.ts

describe("Point Class", () => {
    test("Constructor initializes correctly", () => {
        const point = new Point({ x: 5, y: 10 });
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });

    test("Constructor initializes with default values", () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test("moveVertical moves the point vertically", () => {
        const point = new Point({ x: 5, y: 10 });
        point.moveVertical(3);
        expect(point.y).toBe(13); // 10 + 3
    });

    test("moveHorizontal moves the point horizontally", () => {
        const point = new Point({ x: 5, y: 10 });
        point.moveHorizontal(-2);
        expect(point.x).toBe(3); // 5 - 2
    });
});






test("Constructor initializes with default values", () => {
    const line = new Line();
    expect(line.point1).toEqual(new Point());
    expect(line.point2).toEqual(new Point());
    expect(line.slope).toBeUndefined();
    expect(line.n).toBeUndefined();
});

test("Constructor initializes with custom values", () => {
    const point1 = new Point({ x: 1, y: 2 });
    const point2 = new Point({ x: 3, y: 4 });
    const line = new Line({ point1, point2, slope: 2, n: 0 });
    expect(line.point1).toEqual(point1);
    expect(line.point2).toEqual(point2);
    expect(line.slope).toBe(2);
    expect(line.n).toBe(0);
});

test("getPointOnXAsis returns correct point", () => {
    const point1 = new Point({ x: 1, y: 2 });
    const point2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const pointOnXAxis = line.getPointOnXAsis();
    expect(pointOnXAxis).toEqual(new Point({ x: 0, y: 0 }));
});

test("getPointOnYAsis returns correct point", () => {
    const point1 = new Point({ x: 1, y: 2 });
    const point2 = new Point({ x: 3, y: 6 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const pointOnYAxis = line.getPointOnYAsis();
    expect(pointOnYAxis).toEqual(new Point({ x: 0, y: 0 }));
});