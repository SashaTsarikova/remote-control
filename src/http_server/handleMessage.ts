import { WebSocketServer, WebSocket } from "ws";
import * as robot from 'robotjs';
import drawRect from "./helpers/drawRect";
import drawCircle from "./helpers/drawCircle";
import { handlePrntScrn } from "./helpers/handlePrntScrn";
import Jimp from 'jimp/es';
import * as jimp from'jimp';

export function handleMessage(cmd: string, ws: WebSocket): void {
  const [command, px, height] = cmd.split(' ');
  const {x, y} = robot.getMousePos();
  
  switch (command) {
    case 'mouse_position': 
      ws.send(`mouse_position ${x},${y} \0`);
      break;
    case 'mouse_up':
      robot.moveMouse(x, y - Number(px));
      ws.send(`mouse_up ${x},${y} \0`);
      break;
    case 'mouse_down':
      robot.moveMouse(x, y + Number(px));
      ws.send(`mouse_down ${x},${y} \0`);
      break;
    case 'mouse_left':
      robot.moveMouse(x - Number(px), y);
      ws.send(`mouse_left ${x},${y} \0`);
      break;
    case 'mouse_right':
      robot.moveMouse(x + Number(px), y);
      ws.send(`mouse_right ${x},${y} \0`);
      break;
    case 'draw_circle':
      drawCircle(x, y, Number(px));
      ws.send(`draw_circle`);
      break;
    case 'draw_rectangle':
      drawRect(x, y, Number(height), Number(px),);
      ws.send(`draw_rectangle`);
      break;
    case 'draw_square':
      drawRect(x, y, Number(px), Number(px));
      ws.send(`draw_square`);
      break;
    case 'prnt_scrn':
      const size = 100;
      const bitMap = robot.screen.capture(x, y, size * 2, size * 2);
      handlePrntScrn(bitMap, size).then((getObj: any) => {
        ws.send(getObj.data);
      })
      break;
    default:
      ws.send(`mouse_position ${x},${y} \0`);
      break;
    }
}

