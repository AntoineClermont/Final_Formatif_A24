import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, shakeX, tada } from 'ng-animate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    animations: [
      trigger('shake', [transition(':increment', useAnimation(shakeX, {params: {timing: 2.0}}))]),
      trigger('bounce', [transition(':increment', useAnimation(bounce, {params: {timing: 4.0}}))]),
      trigger('tade', [transition(':increment', useAnimation(tada, {params: {timing: 3.0}}))])
    ]
})
export class AppComponent {
  title = 'ngAnimations';

  rotate= false;

  first = 0;
  second = 0;
  third = 0;

  constructor() {
  }

  rotateCube(){
    if(this.rotate == false){
      this.rotate = true;
      setTimeout(() => {this.rotate = false}, 2000);
    }
  }

  playNgAnimations(forever:boolean){
    this.first++;
    setTimeout(() => {this.second++; 
        setTimeout(() => {this.third++; 
            if(forever)
            {
              setTimeout(() => {this.playNgAnimations(true);}, 3000);
            }
        },3000);
    }, 2000);
  }
}
