import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    this.count++;

    if(this.count > 10){
      this.count = 10;
    }
    
  }

  handleDecrease = () => {

    this.count--;

    if(this.count < 0){
      this.count = 0;
    }

  }

  handleReset = () => {
    this.count = 0;
  }
}
