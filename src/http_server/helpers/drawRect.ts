import * as robot from 'robotjs';

export default function drawRect(x: number, y: number, height: number, width: number) {
  robot.mouseToggle("down");
  robot.setMouseDelay(2);
  const xWithWidth = x + width;
  const yWithHeight = y + height;
   
  for (let currentPosX = x; currentPosX < xWithWidth; currentPosX++)
  {
      const newX = x + (currentPosX - x)
      robot.moveMouse(newX, y);
  }
  for (let currentPosY = y; currentPosY < yWithHeight; currentPosY++)
  {
      const newY = y + (currentPosY - y)
      robot.moveMouse(xWithWidth, newY);
  }
  for (let currentPosX = xWithWidth; currentPosX >= x; currentPosX--)
  {
      const newX = x + (currentPosX - x);
      robot.moveMouse(newX, yWithHeight);
  }
  for (let currentPosY = yWithHeight; currentPosY >= y; currentPosY--)
  {
      const newY = y + (currentPosY - y);
      robot.moveMouse(x, newY);
  }
  robot.mouseToggle("up");
}