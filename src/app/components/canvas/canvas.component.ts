import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { CanvasServiceService } from '../../services/canvas-service.service';
import { ImagesDataService } from '../../services/images-data.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})

export class CanvasComponent implements OnChanges, OnInit {

  constructor(private canvasServiceService: CanvasServiceService, private imagesDataService: ImagesDataService) { }  
  
  ngOnInit(): void {
    // console.log(1,this.values)
  }
 
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() values: any = {}
  @Input() value: any = 0;
  @Input() data: any = {};
  //@Input() image: string | null | undefined = '';

  public image: string | null | undefined = '';

  ngOnChanges(changes: SimpleChanges) {    
    // console.log(2,this.values)
    // console.log(2,changes)
    if (changes['value']){
      this.image = this.getUrl(this.value);
    }
    if (this.canvasRef) {
      // console.log(changes['image'])
      // console.log(changes['data'])            
      if (!changes['value']) {
        this.drawCanvas();
      }
    }
  }

  drawCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.canvasServiceService.drawCanvas(canvas, this.data);
  }

  getUrl(value: number){
    const objectFound = this.imagesDataService.getDataImage.find(obj => obj.id==value)        
    return objectFound?.Url
  }

}
