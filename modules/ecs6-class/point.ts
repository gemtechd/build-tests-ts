export default class Point {
    x: number
    y: number
    constructor({ x = 0, y = 0 }:{x?:number, y?:number} = {}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value:number) {
        this.y += value;
    }
    moveHorizontal(value:number) {
        this.x += value;
    }
}

