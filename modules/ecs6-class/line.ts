import Point from './point';

class Line {
    point1: Point;
    point2: Point;
    slope?: number;
    n?: number;

    constructor({ point1, point2 }: { point1: Point; point2: Point }) {
        this.point1 = point1;
        this.point2 = point2;
    }

    calculateSlope() {
        this.slope = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);
    }

    calculateNOfLineFunction() {
        if (this.slope !== undefined) {
            this.n = this.point1.y - this.slope * this.point1.x;
        }
    }

    getPointOnXAsis() {
        if (this.slope !== 0 && this.slope !== undefined && this.n !== undefined) {
            const x = -this.n / this.slope;
            return new Point({ x, y: 0 });
        }
        return undefined;
    }
getPointOnYAsis() {
        if (this.n !== undefined) {
            return new Point({ x: 0, y: this.n });
        }
        return undefined;
    }

    getPointByX(x: number) {
        if (this.slope !== undefined && this.n !== undefined) {
            const y = this.slope * x + this.n;
            return new Point({ x, y });
        }
        return undefined;
    }

    getPointByY(y: number) {
        if (this.slope !== 0 && this.slope !== undefined && this.n !== undefined) {
            const x = (y - this.n) / this.slope;
            return new Point({ x, y });
        }
        return undefined;
    }
}

export default Line;