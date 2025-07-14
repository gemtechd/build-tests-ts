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
    const dx = this.point2.x - this.point1.x;
    if (dx === 0) {
        this.slope = undefined; 
    } else {
        this.slope = (this.point2.y - this.point1.y) / dx;
    }
    return this.slope;
}

    calculateNOfLineFunction() {
        this.calculateSlope();
    if (this.slope !== undefined)
        this.n = this.point1.y - this.slope * this.point1.x
}

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }


    getPointByX(x: number) {
    if (this.slope === undefined) this.calculateSlope();
    if (this.n === undefined) this.calculateNOfLineFunction();
    if (this.slope === undefined || this.n === undefined) return undefined;
    const y = this.slope * x + this.n;
    return new Point({ x, y });
}

    getPointByY(y: number) {
    if (this.slope === undefined) this.calculateSlope();
    if (this.n === undefined) this.calculateNOfLineFunction();
    if (this.slope === 0) return undefined; 
    if (this.slope === undefined || this.n === undefined) return undefined;
    const x = (y - this.n) / this.slope;
    return new Point({ x, y });
}


}
