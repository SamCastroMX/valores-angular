// import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';

// @Component({
//   selector: 'app-canvas',
//   templateUrl: './canvas.component.html',
//   styles: ``
// })


// export class CanvasComponent implements AfterViewInit, OnInit, OnChanges {
// // data: any;
  
 
  
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('ngOnChanges',this.datos)
//     console.log(changes['datos'])
//     //this.render()

//     if (changes['datos']) {
//       this.render()
//     }
//   }
  
//   ngOnInit(): void {
//     console.log('ngOnInit')

    
//   }

//   @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
//   @Input() datos: any ={};


//   ngAfterViewInit() {
//     this.render()
//     console.log('ngAfterViewInit',1)
//   }





//   render(data?: any){
//   console.log('render')
//     const canvas = this.canvasRef.nativeElement;
//     const ctx = canvas.getContext('2d');
//     if (ctx) {
//       let newProps = {
//         modelo: 'exampleModel', // Replace with actual model data
//         to: 'Some destination text',
//         nombre: 'Some name',
//         mensaje: 'This is a sample message that will be wrapped around the canvas'
//       };

//       if(data){
//         newProps = data;
//         console.log('ssss')
//       }
//       newProps = this.datos;

//       let img: HTMLImageElement | null = null;
//       let languageId = "";

//       // Assuming images are preloaded and available as references
//       img = document.getElementById('img') as HTMLImageElement;
//       console.log(newProps.modelo);
//       console.log(`${newProps.modelo}${languageId}`);
      
//       if (img) {
//         ctx.drawImage(img, 0, 0);
//       }

//       ctx.font = "40px Roboto";
//       ctx.fillStyle = "#fff";
//       ctx.fillText(newProps.to, 170, 675);
//       ctx.fillText(newProps.nombre, 140, 720);

//       const text = newProps.mensaje;
//       console.log(text.length);
//       const words = text.split(' ');

//       let x = 80;
//       let y = 820;
//       let line = '';
//       const lineHeight = 40 + 8;
//       const maxWidth = 820;
//       ctx.font = "33px Roboto";
      
//       for (let n = 0; n < words.length; n++) {
//         const testLine = line + words[n] + ' ';
//         const metrics = ctx.measureText(testLine);
//         const testWidth = metrics.width;
//         if (testWidth > maxWidth) {
//           ctx.fillText(line, x, y);
//           line = words[n] + ' ';
//           y += lineHeight;
//         } else {
//           line = testLine;
//         }
//       }
//       ctx.fillText(line, x, y);
//     }
//   }



// }
