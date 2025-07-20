import Point from "../ecs6-class/point";
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('Point Class', () => {
    let point: Point;

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

    test('moveVertical should increase y coordinate', () => {
        point.moveVertical(3);
        expect(point.y).toBe(5); // 2 + 3
    });

    test('moveVertical should decrease y coordinate', () => {
        point.moveVertical(-1);
        expect(point.y).toBe(1); // 2 - 1
    });

    test('moveHorizontal should increase x coordinate', () => {
        point.moveHorizontal(4);
        expect(point.x).toBe(5); // 1 + 4
    });

    test('moveHorizontal should decrease x coordinate', () => {
        point.moveHorizontal(-2);
        expect(point.x).toBe(-1); // 1 - 2
    });

    test('moveVertical should handle zero movement', () => {
        point.moveVertical(0);
        expect(point.y).toBe(2); // no change
    });

    test('moveHorizontal should handle zero movement', () => {
        point.moveHorizontal(0);
        expect(point.x).toBe(1); // no change
    });

    test('should handle negative initial values', () => {
        const negativePoint = new Point({ x: -3, y: -4 });
        expect(negativePoint.x).toBe(-3);
        expect(negativePoint.y).toBe(-4);
    });

    test('should handle large number values', () => {
        const largePoint = new Point({ x: 1000000, y: 2000000 });
        expect(largePoint.x).toBe(1000000);
        expect(largePoint.y).toBe(2000000);
    });

    test('should initialize with only x or y', () => {
        const pointWithOnlyX = new Point({ x: 5 });
        expect(pointWithOnlyX.x).toBe(5);
        expect(pointWithOnlyX.y).toBe(0);

        const pointWithOnlyY = new Point({ y: 10 });
        expect(pointWithOnlyY.x).toBe(0);
        expect(pointWithOnlyY.y).toBe(10);
    });
});

describe('Point Class - Additional Tests', () => {
    let point: Point;

    beforeEach(() => {
        point = new Point({ x: 2, y: 3 });
    });

    test('should handle initialization with no parameters', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test('should correctly update x when moved horizontally by a positive value', () => {
        point.moveHorizontal(5);
        expect(point.x).toBe(7); // 2 + 5
    });

    test('should correctly update x when moved horizontally by a negative value', () => {
        point.moveHorizontal(-3);
        expect(point.x).toBe(-1); // 2 - 3
    });

    test('should correctly update y when moved vertically by a positive value', () => {
        point.moveVertical(6);
        expect(point.y).toBe(9); // 3 + 6
    });

    test('should correctly update y when moved vertically by a negative value', () => {
        point.moveVertical(-2);
        expect(point.y).toBe(1); // 3 - 2
    });

    test('should allow multiple vertical moves', () => {
        point.moveVertical(5);
        point.moveVertical(2);
        expect(point.y).toBe(10); // 3 + 5 + 2
    });

    test('should allow multiple horizontal moves', () => {
        point.moveHorizontal(3);
        point.moveHorizontal(-1);
        expect(point.x).toBe(4); // 2 + 3 - 1
    });

    test('should create multiple points with different initial values', () => {
        const point1 = new Point({ x: 10, y: 20 });
        const point2 = new Point({ x: -5, y: 10 });
        expect(point1.x).toBe(10);
        expect(point1.y).toBe(20);
        expect(point2.x).toBe(-5);
        expect(point2.y).toBe(10);
    });

    test('should allow movement of point from negative coordinates', () => {
        const pointNegative = new Point({ x: -10, y: -15 });
        pointNegative.moveVertical(10);
        pointNegative.moveHorizontal(5);
        expect(pointNegative.x).toBe(-5); // -10 + 5
        expect(pointNegative.y).toBe(-5); // -15 + 10
    });

    test('should return correct x and y after multiple movements', () => {
        point.moveVertical(4);
        point.moveHorizontal(-6);
        point.moveVertical(-3);
        point.moveHorizontal(8);
        expect(point.x).toBe(4);  // 2 - 6 + 8
        expect(point.y).toBe(4);  // 3 + 4 - 3
    });

    test('should allow both positive and negative movements in sequence', () => {
        point.moveVertical(5);  // 3 + 5 = 8
        point.moveHorizontal(-3); // 2 - 3 = -1
        point.moveVertical(-2);  // 8 - 2 = 6
        point.moveHorizontal(7);  // -1 + 7 = 6
        expect(point.x).toBe(6);
        expect(point.y).toBe(6);
    });

    test('should reset point to new values correctly', () => {
        point.moveHorizontal(3);
        point.moveVertical(4);
        expect(point.x).toBe(5); // 2 + 3
        expect(point.y).toBe(7); // 3 + 4

        // reset to new coordinates
        point = new Point({ x: 10, y: 10 });
        expect(point.x).toBe(10);
        expect(point.y).toBe(10);
    });
});
// function beforeEach(arg0: () => void) {
//     throw new Error("Function not implemented.");
// }

