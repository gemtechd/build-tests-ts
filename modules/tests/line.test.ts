import Line from "../ecs6-class/line";
import Point from "../ecs6-class/point";
import { describe,beforeEach ,it, expect } from '@jest/globals';


describe('Line Class', () => {
    let point1: Point;
    let point2: Point;
    let line: Line;

    beforeEach(() => {
        point1 = new Point({ x: 1, y: 2 });
        point2 = new Point({ x: 3, y: 4 });
        line = new Line({ point1, point2 });
    });

    test('should initialize with default values', () => {
        const defaultLine = new Line({});
        expect(defaultLine.point1.x).toBe(0);
        expect(defaultLine.point1.y).toBe(0);
        expect(defaultLine.point2.x).toBe(0);
        expect(defaultLine.point2.y).toBe(0);
        expect(defaultLine.slope).toBeUndefined();
        expect(defaultLine.n).toBeUndefined();
    });

    test('should initialize with given values', () => {
        expect(line.point1.x).toBe(1);
        expect(line.point1.y).toBe(2);
        expect(line.point2.x).toBe(3);
        expect(line.point2.y).toBe(4);
        expect(line.slope).toBeUndefined();
        expect(line.n).toBeUndefined();
    });

    // 
    test('should calculate slope correctly', () => {
        line.calculateSlope();
        expect(line.slope).toBe(1); // (4 - 2) / (3 - 1) = 1
    });

    test('should calculate n correctly', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.n).toBe(1); // 2 - (1 * 1) = 1
    });

    test('should calculate the point on X axis correctly', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnX = line.getPointOnXAsis();
        expect(pointOnX?.x).toBe(-1); // y = 0, solve for x
        expect(pointOnX?.y).toBe(0);  // y = 0
    });
// !
    // test('should calculate the point on Y axis correctly', () => {
    //     line.calculateSlope();
    //     line.calculateNOfLineFunction();
    //     const pointOnY = line.getPointOnYAsis();
    //     expect(pointOnY?.x).toBe(0);  // x = 0
    //     expect(pointOnY?.y).toBe(2);  // y = 2 (from point1)
    // });
// !

test('should handle line with identical points and return undefined slope', () => {
    const identicalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 2 }) });
    identicalLine.calculateSlope();
    expect(identicalLine.slope).toBeUndefined(); // כאשר הנקודות זהות, אין שיפוע
});

test('should calculate slope correctly for negative coordinates', () => {
    const negativeLine = new Line({ point1: new Point({ x: -1, y: -2 }), point2: new Point({ x: -3, y: -4 }) });
    negativeLine.calculateSlope();
    expect(negativeLine.slope).toBe(1); // חישוב השיפוע אמור להיות 1 במקרה של נקודות שליליות
});

test('should handle vertical line on X axis', () => {
    const verticalLine = new Line({
        point1: new Point({ x: 3, y: 0 }),
        point2: new Point({ x: 3, y: 5 }),
    });
    const pointOnY = verticalLine.getPointOnYAsis();
    expect(pointOnY).toBeUndefined();  // קו אנכי לא חותך את ציר ה-Y
});

    test('should return correct point by X value', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointByX = line.getPointByX(5);
        expect(pointByX?.x).toBe(5);
        expect(pointByX?.y).toBe(6);  // y = slope * x + n = 1 * 5 + 1 = 6
    });

    test('should return correct point by Y value', () => {
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointByY = line.getPointByY(6);
        expect(pointByY?.x).toBe(5);  // x = (y - n) / slope = (6 - 1) / 1 = 5
        expect(pointByY?.y).toBe(6);
    });
    // 
    test('should handle vertical line (undefined slope)', () => {
        const verticalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 4 }) });
        verticalLine.calculateSlope();
        expect(verticalLine.slope).toBeUndefined(); // Vertical line should have no defined slope
    });

    test('should handle horizontal line (zero slope)', () => {
        const horizontalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 2 }) });
        horizontalLine.calculateSlope();
        expect(horizontalLine.slope).toBe(0); // שיפוע 0 עבור קו אופקי
    });

    test('should calculate n correctly for horizontal line', () => {
        const horizontalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 2 }) });
        horizontalLine.calculateSlope();
        horizontalLine.calculateNOfLineFunction();
        expect(horizontalLine.n).toBe(2); // מכיוון שהקו אופקי, n שווה ל-2
    });
    test('should return undefined for X axis intersection of horizontal line', () => {
        const horizontalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 2 }) });
        horizontalLine.calculateSlope();
        horizontalLine.calculateNOfLineFunction();
        const pointOnX = horizontalLine.getPointOnXAsis();
        expect(pointOnX).toBeUndefined(); // קו אופקי לא חותך את ציר ה-X
    });
    test('should return undefined for point by Y value on vertical line', () => {
        const verticalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 4 }) });
        verticalLine.calculateSlope();
        const pointByY = verticalLine.getPointByY(6);
        expect(pointByY).toBeUndefined(); // קו אנכי לא יכול לחשב את הנקודה על פי Y
    });
    test('should retain undefined slope and n if not calculated', () => {
        const line = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 4 }) });
        expect(line.slope).toBeUndefined(); // לא חישבנו את השיפוע
        expect(line.n).toBeUndefined(); // לא חישבנו את ה-n
    });
    test('should handle coincident points', () => {
        const coincidentLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 2 }) });
        coincidentLine.calculateSlope();
        expect(coincidentLine.slope).toBeUndefined(); // אין שיפוע
    });
    test('should handle line with points in different quadrants', () => {
        const lineWithOppositePoints = new Line({ point1: new Point({ x: -1, y: -1 }), point2: new Point({ x: 2, y: 3 }) });
        lineWithOppositePoints.calculateSlope();
        lineWithOppositePoints.calculateNOfLineFunction();
        expect(lineWithOppositePoints.slope).toBeCloseTo(4 / 3); // חישוב שיפוע נכון
    });
    // !
    test('should handle horizontal line on Y axis', () => {
        const horizontalLine = new Line({ point1: new Point({ x: 0, y: 2 }), point2: new Point({ x: 5, y: 2 }) });
        const pointOnY = horizontalLine.getPointOnYAsis();
        expect(pointOnY?.x).toBe(0);  // x = 0
        expect(pointOnY?.y).toBe(2);  // y = 2
    });
    // !

    test('should handle lines with negative coordinates', () => {
        const negativeLine = new Line({ point1: new Point({ x: -1, y: -2 }), point2: new Point({ x: -3, y: -4 }) });
        negativeLine.calculateSlope();
        expect(negativeLine.slope).toBe(1); // (y2 - y1) / (x2 - x1) = (-4 - (-2)) / (-3 - (-1)) = 1
    });

    test('should calculate the point on Y axis correctly for non-vertical lines', () => {
    line.calculateSlope();
    line.calculateNOfLineFunction();
    const pointOnY = line.getPointOnYAsis();
    expect(pointOnY?.x).toBe(0);  // החיתוך עם ציר ה-Y תמיד יהיה ב-x = 0
    expect(pointOnY?.y).toBe(1);  // הנקודה על ציר ה-Y צריכה להיות (0, 1) עבור שיפוע 1 ו-n = 1
});

test('should return undefined for vertical line on Y axis', () => {
    const verticalLine = new Line({
        point1: new Point({ x: 3, y: 0 }),
        point2: new Point({ x: 3, y: 5 }),
    });
    const pointOnY = verticalLine.getPointOnYAsis();
    expect(pointOnY).toBeUndefined();  // קו אנכי לא חותך את ציר ה-Y
});
describe('Line class - calculateSlope tests', () => {
  it('should return undefined for vertical line', () => {
    const point1 = new Point({ x: 0, y: 0 });
    const point2 = new Point({ x: 0, y: 5 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    expect(line.slope).toBeUndefined();  // קו אנכי, שיפוע לא מוגדר
  });

  it('should return 0 for horizontal line', () => {
    const point1 = new Point({ x: 0, y: 0 });
    const point2 = new Point({ x: 5, y: 0 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    expect(line.slope).toBe(0);  // קו אופקי, שיפוע 0
  });

  it('should return correct slope for non-horizontal, non-vertical line', () => {
    const point1 = new Point({ x: 0, y: 0 });
    const point2 = new Point({ x: 5, y: 5 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    expect(line.slope).toBe(1);  // שיפוע 1 (כי 5-0/5-0 = 1)
  });
});
describe('Line class - calculateNOfLineFunction tests', () => {
  it('should return correct n for horizontal line', () => {
    const point1 = new Point({ x: 0, y: 3 });
    const point2 = new Point({ x: 5, y: 3 });
    const line = new Line({ point1, point2 });
    line.calculateSlope(); // קו אופקי
    line.calculateNOfLineFunction();
    expect(line.n).toBe(3);  // n שווה ל-y של point1
  });

  it('should return correct n for non-horizontal line', () => {
    const point1 = new Point({ x: 0, y: 0 });
    const point2 = new Point({ x: 5, y: 5 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    expect(line.n).toBe(0);  // n = y - slope * x => 0 - 1 * 0 = 0
  });
});
describe('Line class - getPointOnYAsis tests', () => {
  it('should return point on Y-axis for horizontal line', () => {
    const point1 = new Point({ x: 0, y: 5 });
    const point2 = new Point({ x: 5, y: 5 });
    const line = new Line({ point1, point2 });
    expect(line.getPointOnYAsis()).toEqual(new Point({ x: 0, y: 5 }));  // קו אופקי חותך את ציר ה-Y בנקודה (0, 5)
  });

  it('should return point on Y-axis for non-horizontal line', () => {
    const point1 = new Point({ x: 0, y: 3 });
    const point2 = new Point({ x: 5, y: 8 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    expect(line.getPointOnYAsis()).toEqual(new Point({ x: 0, y: 3 }));  // חישוב החיתוך עם ציר ה-Y
  });

  it('should return undefined if slope is undefined', () => {
    const point1 = new Point({ x: 0, y: 3 });
    const point2 = new Point({ x: 0, y: 8 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();  // קו אנכי, אין חיתוך עם ציר ה-Y
    expect(line.getPointOnYAsis()).toBeUndefined();  
  });
  test('should return undefined for vertical line on Y axis', () => {
    const verticalLine = new Line({
        point1: new Point({ x: 3, y: 0 }),
        point2: new Point({ x: 3, y: 5 }),
    });
    const pointOnY = verticalLine.getPointOnYAsis();
    expect(pointOnY).toBeUndefined();  // קו אנכי לא חותך את ציר ה-Y
});

test('should handle line with identical points and return undefined slope', () => {
    const identicalLine = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 2 }) });
    identicalLine.calculateSlope();
    expect(identicalLine.slope).toBeUndefined(); // כאשר הנקודות זהות, אין שיפוע
    expect(identicalLine.n).toBeUndefined();  // כאשר אין שיפוע, אין גם ערך של n
});

test('should return undefined for vertical line on X axis', () => {
    const verticalLine = new Line({
        point1: new Point({ x: 0, y: 0 }),
        point2: new Point({ x: 0, y: 5 }),
    });
    verticalLine.calculateSlope();
    const pointOnX = verticalLine.getPointOnXAsis();
    expect(pointOnX).toBeUndefined();  // קו אנכי לא חותך את ציר ה-X
});

});
});
