import * as robot from 'robotjs';

export default function drawCircle(x: number, y: number, r: number) {
  robot.mouseToggle("down");
  robot.setMouseDelay(2);
  const xWithWidth = x + r * 2;
  const xCenter = x + r;

  for (let currentPosX = x; currentPosX <= xWithWidth; currentPosX++)
  {
      const newY = getNewY(xCenter, y, currentPosX, r);
      robot.moveMouse(currentPosX, newY);
  }
  for (let currentPosX = xWithWidth; currentPosX >= x; currentPosX--)
  {
      const newY = getNewY(xCenter, y, currentPosX, r);
      const newYTransformed = y - (newY-y);
      robot.moveMouse(currentPosX, newYTransformed);
  }

  robot.mouseToggle("up");
}

function getNewY(xCenter: number, yCenter: number, newX: number, r: number): number {
  const R2 = Math.pow(r, 2);
  const xPos2 = Math.pow(newX - xCenter, 2);
  const sqrt = Math.sqrt(R2 - xPos2);
  return Math.abs(sqrt - yCenter);
}