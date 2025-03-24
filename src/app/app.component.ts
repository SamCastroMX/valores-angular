import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  public intro: boolean = true;
  
  changeIntro($event: boolean) {
    console.log(this.intro)
    this.intro = !this.intro
    console.log(this.intro)

  }

  title = 'valores';

}
