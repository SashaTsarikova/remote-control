# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start:dev`

**Production**

`npm run start`

Application is running on port 3000. Ws server is on port 8080 (default). 

If you want to **change default server**:
1) change port value in index.ts file located in "./src/http_server";
2) type chosen port value in correspondent input on the front-end part in format 'localhost:__your_chosen_port__';


To test **Position command** type "p" (Eng keyboard) and You'll see changes in Mouse position block as well as in Last command block of front-end.
To test **Navigation commands** (mouse_up, mouse_down, mouse_left, mouse_right) use Your keyboard arrow keys and see the result on the screen.
To test **Drawing commands** (draw_circle, draw_rectangle, draw_square) You need to:
  1. Открыть фронт
  2. Открыть встроенный в Винду paint
  3. Фронт разместить на левой половине экрана (потянуть окно к левому краю), выбрать paint для правой половины
  4. Сделать окно фронта активным
  5. Навести мышь на область пэинта
  6. Нажать c, r или s
You can change radius and length values of objects to draw in front-side inputs. 

P.S. Use any other drawing apps if it is more convenient for You.

To test **Print screen command**, please, press 'LCtrl+p' keys on Your keyboard. The result will appear if correspondent square block. 
