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
    if (this.point1.x === this.point2.x) {
        this.slope = undefined; // קו אנכי, שיפוע לא מוגדר
    } else if (this.point1.y === this.point2.y) {
        this.slope = 0; // קו אופקי
    } else {
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
    }
}

   
    calculateNOfLineFunction() {
    if (this.slope === 0) {
        this.n = this.point1.y; // עבור קו אופקי, n שווה ל-y של point1
    } else if (this.slope !== undefined) {
        this.n = this.point1.y - this.slope * this.point1.x;
    }
}

    getPointOnXAsis() {
        return this.getPointByY(0)
    }
  
 // חישוב החיתוך עם ציר Y
    getPointOnYAsis(): Point | undefined {
        // אם מדובר בקו אופקי, אז ה-Y נשאר קבוע
        if (this.point1.y === this.point2.y) {
            return new Point({ x: 0, y: this.point1.y });  // קו אופקי חותך את ציר ה-Y באותו ה-Y
        }

        // אם יש שיפוע מחושב, נחשב את החיתוך עם ציר ה-Y (כאשר x = 0)
        if (this.slope !== undefined && this.n !== undefined) {
            const y = this.slope * 0 + this.n;  // חישוב y כאשר x = 0
            return new Point({ x: 0, y });
        }

        return undefined;
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