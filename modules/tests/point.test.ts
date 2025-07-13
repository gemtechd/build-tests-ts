import Point from "../ecs6-class/point";

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