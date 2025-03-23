import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Image } from '../interface/image';
import { DataSend } from '../interface/data-send';

@Injectable({
  providedIn: 'root'
})
export class ImagesDataService {

  constructor(private http: HttpClient) { }

  private idInit: number = 1;
  private imgUrlInit: string = '/assets/images/big/SanValentin001.2d4a3b06a9f916c90e40.jpg';
  private uri: string = 'https://cassamstudio.net/api/hi.php';
  private uriSend: string = 'https://cassamstudio.net/mail5.php';
  private dataDefault: Image = {
    id: this.idInit,
    name: '',
    Url: this.imgUrlInit,
    Thumb: ''
  }

  private dataService: Image[] = [this.dataDefault]

  public getImagesData(): Observable<Image[]> {
    return this.http.get<Image[]>(this.uri)
      .pipe(
        tap(img => this.dataService = img),
        // tap(img => console.log('service',this.dataService))
      )
  }

  public sendImage(data: DataSend): Observable<any> {
    return this.http.post(this.uriSend, data)
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.error('Error occurred:', error);
          return of([]);
        })
      )
  }

  get getDataImage() {
    return this.dataService;
  }

  get getDataDefault(){
    return this.dataDefault;
  }

}
