import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  name = 'Angel';
  age = '18';
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Angel',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

}
