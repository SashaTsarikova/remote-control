import Jimp from 'jimp/es';
import * as jimp from'jimp';

export async function handlePrntScrn(bitMap: any, size: number): Promise<{data: string}> {
  const img = new Jimp(size * 2, size * 2);
    
  img.bitmap.data = bitMap.image;

  const base64 = await img.getBufferAsync(jimp.MIME_PNG);

  return Promise.resolve({ data: `prnt_scrn ${base64.toString("base64")}` });
}