import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';
describe('Line', () => {
    let line: Line;
    const pointA = new Point({ x: 2, y: 3 });
    const pointB = new Point({ x: 5, y: 11 });

    beforeEach(() => {
        line = new Line({ point1: pointA, point2: pointB });
    });

    test('calculates slope correctly', () => {
        line.calculateSlope();
        expect(line.slope).toBeCloseTo(2.6667, 4); 
    });

   

        test('gets point on X axis correctly', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnXAxis = line.getPointOnXAsis();
        expect(pointOnXAxis?.x).toBeCloseTo(0.875, 4);
        expect(pointOnXAxis?.y).toBeCloseTo(0, 4);
    });

    test('gets point on Y axis correctly', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnYAxis = line.getPointOnYAsis();
        expect(pointOnYAxis?.x).toBeCloseTo(0, 4);
        expect(pointOnYAxis?.y).toBeCloseTo(-2.3333, 4);
    });

  

    test('gets point by Y correctly', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointByY = line.getPointByY(11);
        expect(pointByY?.x).toBeCloseTo(5, 4);
        expect(pointByY?.y).toBeCloseTo(11, 4);
    });


test('getPointOnXAsis returns undefined if slope or n is undefined', () => {
    line.slope = undefined;
    line.n = 1;
    expect(line.getPointOnXAsis()).toBeUndefined();
    line.slope = 2;
    line.n = undefined;
    expect(line.getPointOnXAsis()).toBeUndefined();
});

test('getPointOnYAsis returns undefined if n is undefined', () => {
    line.n = undefined;
    expect(line.getPointOnYAsis()).toBeUndefined();
});

test('getPointByX returns undefined if slope or n is undefined', () => {
    line.slope = undefined;
    line.n = 1;
    expect(line.getPointByX(5)).toBeUndefined();
    line.slope = 2;
    line.n = undefined;
    expect(line.getPointByX(5)).toBeUndefined();
});
test('getPointByY returns undefined if slope is 0 or slope/n is undefined', () => {
    line.slope = 0;
    line.n = 1;
    expect(line.getPointByY(5)).toBeUndefined();
    line.slope = undefined;
    line.n = 1;
    expect(line.getPointByY(5)).toBeUndefined();
    line.slope = 2;
    line.n = undefined;
    expect(line.getPointByY(5)).toBeUndefined();
});
test('calculateNOfLineFunction does nothing if slope is undefined', () => {
    line.slope = undefined;
    line.n = 123;
    line.calculateNOfLineFunction();
    expect(line.n).toBe(123); 
});
});




