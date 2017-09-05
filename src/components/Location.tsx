import {Event} from './Event'

export class Location {
  id: number;
  coordinateX: number;
  coordinateY: number;
  event: Event;
  getDistance(x: number, y: number): number {
    // Requirement: The distance between two points should be computed as the Manhattan distance.
    // Manhattan distance: In a plane with p1 at (x1, y1) and p2 at (x2, y2), the distance between two points is |x1 - x2| + |y1 - y2|.
    // Ref: https://xlinux.nist.gov/dads/HTML/manhattanDistance.html
    return Math.abs(this.coordinateX - x)+Math.abs(this.coordinateY - y);
  }

  constructor(id: number, coordinateX: number, coordinateY: number, event: Event){
      this.id = id;
      this.coordinateX = coordinateX;
      this.coordinateY = coordinateY;
      this.event = event;  
  }
}