import Point from "./point";
class Line {
    point1: Point;
    point2: Point;
    n: number;
    slope: number;
    constructor({ point1, point2 }: { point1: Point, point2: Point }) {
        this.point1 = point1;
        this.point2 = point2;
        this.calculateSlope();
        this.calculateNOfLineFunction();
    }
    calculateSlope() {
        this.slope = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);
    }
    calculateNOfLineFunction() {
        this.n = this.point1.y - this.slope * this.point1.x;
    }
    getPointOnXAsis() {
        return this.getPointByY(0);
    }
    getPointOnYAsis() {
        return this.getPointByX(0);
    }
    getPointByX(x: number) {
        let y = this.slope * x + this.n;
        return new Point({ x, y });
    }
    getPointByY(y: number) {
        let x = (y - this.n) / this.slope;
        return new Point({ x, y });
    }
}
export default Line;