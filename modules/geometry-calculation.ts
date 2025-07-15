import Line from './ecs6-class/line';
import Point from './ecs6-class/point';

export const calculateDistance = (point1: Point, point2: Point): number => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}



export const calculateJunctionPoint = (line1: Line, line2: Line): boolean | Point | undefined => {
    if (line1.slope === undefined || line2.slope === undefined || line1.n === undefined || line2.n === undefined) {
        return undefined;
    }

    
    if (line1.slope === line2.slope && line1.n === line2.n) {
        return true; 
    }

  
    if (line1.slope === line2.slope) {
        return false; 
    }

    
    const x = (line1.n - line2.n) / (line2.slope - line1.slope);
    const y = line1.slope * x + line1.n;
    const junctionPoint = new Point({x, y});
    return junctionPoint; 
};
export const isPointOnLine = (line: Line, point: Point): boolean => {
    const proxyLine = new Line({ point1: line.point1, point2: point });
    proxyLine.calculateSlope();
    if (line.slope === proxyLine.slope) {
        proxyLine.calculateNOfLineFunction();
        return line.n === proxyLine.n;
    }
    return false;
     };
