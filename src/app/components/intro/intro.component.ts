import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  @Output() introEnter = new EventEmitter<boolean>();
  
  enter(){
    this.introEnter.emit(false);
  }

}
