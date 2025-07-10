import Line from './ecs6-class/line';
import Point from './ecs6-class/point';

export const calculateDistance = (point1: Point, point2: Point): number => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point2.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

export const calculateJunctionPoint = (line1: Line, line2: Line): Boolean | Point | undefined => {
    if (line1.slope === line2.slope) {
        if (line1.n === line2.n) {
            return true
        }
        else {
            return false
        }
    }
    else {
        if (line1.n !== undefined && line1.slope !== undefined && line2.n !== undefined && line2.slope !== undefined) {
            const x = (line1.n - line2.n) / (line2.slope - line1.slope)
            const junctionPoint = line1.getPointByX(x);
            return junctionPoint
        }
    }
}

export const isPointOnLine = (line: Line, point: Point): Boolean => {
    const proxyLine = new Line({ point1: line.point1, point2: point })
    proxyLine.calculateSlope()
    if (line.slope === proxyLine.slope) {
        proxyLine.calculateNOfLineFunction()
        if (line.n === proxyLine.n) {
            return true
        }
    }
    return false
}


