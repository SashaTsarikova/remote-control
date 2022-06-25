import Jimp from 'jimp/es';
import * as jimp from'jimp';

export async function handlePrntScrn(bitMap: any, size: number): Promise<{data: string}> {
  const img = new Jimp(size * 2, size * 2);
    
  img.bitmap.data = bitMap.image;

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    var color = bitMap.colorAt(x, y);
    var red = parseInt(color[0] + color[1], 16);
    var green = parseInt(color[2] + color[3], 16);
    var blue = parseInt(color[4] + color[5], 16);

    img.bitmap.data[idx + 0] = Number(red);
    img.bitmap.data[idx + 1] = Number(green);
    img.bitmap.data[idx + 2] = Number(blue);
    img.bitmap.data[idx + 3] = 255;
});

  const base64 = await img.getBufferAsync(jimp.MIME_PNG);

  return Promise.resolve({ data: `prnt_scrn ${base64.toString("base64")} \0` });
}
