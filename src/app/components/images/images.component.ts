import { Component, OnInit } from '@angular/core';
import { Image } from '../../interface/image';
import { ImagesDataService } from '../../services/images-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit {

  constructor(
    private imageService: ImagesDataService,
    private fb: FormBuilder
  ) { }

  public images: Image[] = []
  public isDisabled = false;

  public postalesForm: FormGroup = this.fb.group({
    postal: [1, [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    para: ['', [Validators.required]],
    mensaje: ['', [Validators.required]],
    tuCorreo: [''],
    correoDestino: ['', [Validators.required, Validators.email]]
  });

  ngOnInit() {
    this.imageService.getImagesData().subscribe(
      (data) => {
        this.images = data;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  download() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const downloader = document.getElementById('downloader') as HTMLAnchorElement;
    console.log(canvas)
    if (canvas && downloader) {

      downloader.download = 'GXO.jpg';
      downloader.href = canvas.toDataURL('image/jpeg');
    }
  }

  sendImage(): void {
    if (this.postalesForm.invalid) {
      this.postalesForm.markAllAsTouched();      
      return
    };
    
    const canvas: HTMLCanvasElement | null = document.getElementById('canvas')  as HTMLCanvasElement;

    const dataSend = {
      img: canvas.toDataURL("image/jpg"),
      email: this.postalesForm.get('correoDestino')?.value,
      to: this.postalesForm.get('para')?.value,
      youremail: this.postalesForm.get('tuCorreo')?.value,
    }

    this.isDisabled = true;

    // console.log(dataSend,this.isDisabled)
    this.imageService.sendImage(dataSend)
      .subscribe(

        data => {
          console.log('Data received comp:', data);
          this.isDisabled = false;
          console.log(this.imageService.getDataDefault)
          this.postalesForm.reset({
            postal: 1,
            name: '',
            para: '',
            mensaje: '',
            tuCorreo: '',
            correoDestino: ''
          })
        },
        error => {          
          console.error('Error occurred comp:', error);
          this.isDisabled = false;
        }
      )
  }

  isValidField(field: string) {
    return this.postalesForm.controls[field].errors && this.postalesForm.controls[field].touched
  }

  getFieldError(field: string): string | null {

    if (!this.postalesForm.controls[field]) return null;

    const errors = this.postalesForm.controls[field].errors || {}
    
    for (const key of Object.keys(errors)) {

      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength}`;
        case 'email':
          return 'Se requiere un email';
      }

    }

    return null;

  }

}


