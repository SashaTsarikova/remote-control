export function getNewY(xCenter: number, yCenter: number, newX: number, r: number): number {
  const R2 = Math.pow(r, 2);
  const xPos2 = Math.pow(newX - xCenter, 2);
  const sqrt = Math.sqrt(R2 - xPos2);
  return Math.abs(sqrt - yCenter);
}