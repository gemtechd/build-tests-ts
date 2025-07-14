import Line from './ecs6-class/line';
import Point from './ecs6-class/point';
export const calculateDistance = (point1: Point, point2: Point): number => {
    let distanceX = Math.abs(point2.x - point1.x) ** 2;
    let distanceY = Math.abs(point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}
export const isPointOnLine = (line: Line, point: Point): Boolean => {
    if (typeof line.slope !== 'number' || typeof line.n !== 'number' || typeof point.x !== 'number' || typeof point.y !== 'number') {
        throw new Error('Invalid input types');
    }
    const expectedY = line.slope * point.x + line.n;
    const tolerance = 0.0001;
    return Math.abs(point.y - expectedY) < tolerance;
}
export const calculateJunctionPoint = (line1: Line, line2: Line): Point | false | true => {
    if (line1.slope === line2.slope) {
        if (line1.n === line2.n) {
            return true;
        }
        return false;
    }
    const x = (line2.n - line1.n) / (line1.slope - line2.slope);
    const y = line1.slope * x + line1.n;
    return new Point({ x, y });
}