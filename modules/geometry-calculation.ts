import Line from './ecs6-class/line';
import Point from './ecs6-class/point';

export const calculateDistance = (point1: Point, point2: Point): number => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

export const calculateJunctionPoint = (line1: Line, line2: Line): Boolean | Point | undefined => {
    // ודא שלשני הקווים יש slope ו-n
    if (line1.slope === undefined) line1.calculateSlope?.();
    if (line1.n === undefined) line1.calculateNOfLineFunction?.();
    if (line2.slope === undefined) line2.calculateSlope?.();
    if (line2.n === undefined) line2.calculateNOfLineFunction?.();

    if (line1.slope === line2.slope) {
        if (line1.n === line2.n) {
            return true;
        } else {
            return false;
        }
    } else {
        if (
            line1.n !== undefined && line1.slope !== undefined &&
            line2.n !== undefined && line2.slope !== undefined
        ) {
            const x = (line1.n - line2.n) / (line2.slope - line1.slope);
            const junctionPoint = line1.getPointByX(x);
            return junctionPoint;
        }
    }
}

export const isPointOnLine = (line: Line, point: Point): Boolean => {
    if (line.slope === undefined) line.calculateSlope?.();
    if (line.n === undefined) line.calculateNOfLineFunction?.();

    const proxyLine = new Line({ point1: line.point1, point2: point });
    proxyLine.calculateSlope();
    if (
        line.slope !== undefined &&
        proxyLine.slope !== undefined &&
        Math.abs(line.slope - proxyLine.slope) < 1e-10
    ) {
        proxyLine.calculateNOfLineFunction();
        if (
            line.n !== undefined &&
            proxyLine.n !== undefined &&
            Math.abs(line.n - proxyLine.n) < 1e-10
        ) {
            return true;
        }
    }
    return false;
}

