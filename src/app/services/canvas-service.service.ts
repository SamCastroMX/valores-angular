import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CanvasServiceService {

  constructor() { }

  public drawCanvas(
    canvas: HTMLCanvasElement,
    data: any
  ) {
    console.log("START")
    const ctx = canvas.getContext('2d');

    if (ctx && data) {
      const { para, name, mensaje } = data;
      let img: HTMLImageElement | null = null;

      img = document.getElementById('img') as HTMLImageElement;


      //img.crossOrigin = "anonymous"
      if (img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de redibujar
        ctx.drawImage(img, 0, 0);
      }

      ctx.font = "40px Roboto";
      ctx.fillStyle = "#fff";
      ctx.fillText(para, 170, 675);
      ctx.fillText(name, 140, 720);

      const words = mensaje.split(' ');
      let x = 80;
      let y = 820;
      let line = '';
      const lineHeight = 40 + 8;
      const maxWidth = 820;
      ctx.font = "33px Roboto";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth) {
          ctx.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }

      ctx.fillText(line, x, y);


    }
  }

}
