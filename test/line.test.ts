import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

jest.mock('../modules/ecs6-class/line', () => {
    return jest.fn().mockImplementation(() => {
        const instance = {
            point1: new Point({ x: 0, y: 0 }),
            point2: new Point({ x: 2, y: 2 }),
            slope: undefined,
            n: undefined,
            setPoints: jest.fn(function (p1: Point, p2: Point) {
                this.point1 = p1;
                this.point2 = p2;
            }),
            calculateSlope: jest.fn(function () {
                const dx = this.point2.x - this.point1.x;
                if (dx === 0) {
                    this.slope = undefined;
                } else {
                    this.slope = (this.point2.y - this.point1.y) / dx;
                }
                return this.slope;
            }),
            calculateNOfLineFunction: jest.fn(function () {
                if (this.slope === undefined) {
                    this.calculateSlope();
                }
                if (this.slope !== undefined) {
                    this.n = this.point1.y - this.slope * this.point1.x;
                }
            }),
            getPointByX: jest.fn(function (x) {
                if (this.slope === undefined) this.calculateSlope();
                if (this.n === undefined) this.calculateNOfLineFunction();
                if (this.slope === undefined || this.n === undefined) return undefined;
                const y = this.slope * x + this.n;
                return new Point({ x, y });
            }),
            getPointByY: jest.fn(function (y) {
                if (this.slope === undefined) this.calculateSlope();
                if (this.n === undefined) this.calculateNOfLineFunction();
                if (this.slope === undefined || this.n === undefined) return undefined;
                const x = (y - this.n) / this.slope;
                return new Point({ x, y });
            }),
            getPointOnXAsis: jest.fn(function () {
                this.calculateNOfLineFunction();
                return this.getPointByY(0);
            }),
            getPointOnYAsis: jest.fn(function () {
                this.calculateNOfLineFunction();
                return this.getPointByX(0);
            }),
        };
        return instance;
    });
});

describe('Line', () => {
    let mockLine: Line;
    beforeEach(() => {
        mockLine = new Line();
        mockLine.setPoints(new Point({ x: 0, y: 0 }), new Point({ x: 2, y: 2 }));
    });

    it('should mock calculateSlope', () => {
        const slope = mockLine.calculateSlope();
        expect(slope).toBe(1);
    });

    it('should mock calculateNOfLineFunction', () => {
        mockLine.calculateNOfLineFunction();
        expect(mockLine.n).toBe(0);
    });

    it('should create a line with two points', () => {
        const p1 = new Point({ x: 0, y: 0 });
        const p2 = new Point({ x: 2, y: 2 });
        const line = new Line({ point1: p1, point2: p2 });
        expect(line.point1).toEqual(p1);
        expect(line.point2).toEqual(p2);
    });

    it('should calculate the correct slope', () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateSlope();
        expect(line.slope).toBeCloseTo(2);
    });

    it('should calculate the correct n (y-intercept)', () => {
        const p1 = new Point({ x: 1, y: 2 });
        const p2 = new Point({ x: 3, y: 6 });
        const line = new Line({ point1: p1, point2: p2 });
        line.calculateNOfLineFunction();
        expect(line.n).toBeCloseTo(0);
    });

    it('should get correct point by X', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        const point = line.getPointByX(2);
        expect(point?.x).toBeCloseTo(2);
        expect(point?.y).toBeCloseTo(5);
    });

    it('should get correct point by Y', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        const point = line.getPointByY(7);
        expect(point?.y).toBeCloseTo(7);
        expect(point?.x).toBeCloseTo(3);
    });

    it('should get point on X axis (y=0)', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        const point = line.getPointOnXAsis();
        expect(point?.y).toBeCloseTo(0);
    });

    it('should get point on Y axis (x=0)', () => {
        const p1 = new Point({ x: 0, y: 1 });
        const p2 = new Point({ x: 1, y: 3 });
        const line = new Line({ point1: p1, point2: p2 });
        const point = line.getPointOnYAsis();
        expect(point?.x).toBeCloseTo(0);
        expect(point?.y).toBeCloseTo(1);
    });
});