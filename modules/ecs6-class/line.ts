import Point from "./point";

export default class Line {
    point1: Point
    point2: Point
    n: number | undefined
    slope: number | undefined
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }: { point1?: Point, point2?: Point, n?: number, slope?: number } = {}) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }


    calculateNOfLineFunction() {
        this.calculateSlope(); // הוספת קריאה כאן
        if (this.slope)
            this.n = this.point1.y - this.slope * this.point1.x;
    }

    getPointOnXAsis() {
        this.calculateSlope(); // הוספת קריאה כאן
        return this.getPointByY(0);
    }
    getPointOnYAsis() {
        this.calculateSlope(); // הוספת קריאה כאן
        return this.getPointByX(0);
    }



    getPointByX(x: number) {
        if (this.slope && this.n) {
            let y = this.slope * x + this.n
            return new Point({ x, y })
        }
    }

    getPointByY(y: number) {
        if (this.slope && this.n) {
            let x = (y - this.n) / this.slope;
            return new Point({ x, y })
        }
    }


}






